import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njyy8qbmd.css';
import '../../css/f/f-ksdqydc.css';
import '../../css/k/k6t4853ju.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="njyy8qbmd"/><circle class="f-ksdqydc"/><path class="k6t4853ju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-person-filled"} {...others} />);
}

export default Component;
