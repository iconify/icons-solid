import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4994ssvl.css';
import '../../css/m/m5h3s7x3v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d4994ssvl"/><path class="m5h3s7x3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:download"} {...others} />);
}

export default Component;
