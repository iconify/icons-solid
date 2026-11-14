import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axae4tbjw.css';
import '../../css/c/cmgm03bvr.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="axae4tbjw"/><path class="cmgm03bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:octopus"} {...others} />);
}

export default Component;
