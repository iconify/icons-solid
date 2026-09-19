import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn5-me7co.css';
import '../../css/x/xpeiq2kly.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="zn5-me7co"/><path class="xpeiq2kly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-star"} {...others} />);
}

export default Component;
