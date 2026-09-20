import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke4wifbjz.css';
import '../../css/q/qeliok-fz.css';
import '../../css/m/mb-jqwb9o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ke4wifbjz"/><path class="qeliok-fz"/><path class="mb-jqwb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:tune"} {...others} />);
}

export default Component;
