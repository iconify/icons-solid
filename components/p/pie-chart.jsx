import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huue4xb4c.css';
import '../../css/o/o6fdclsme.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="huue4xb4c"/><path class="o6fdclsme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:pie-chart"} {...others} />);
}

export default Component;
