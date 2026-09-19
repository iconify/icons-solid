import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqcxf6bxf.css';
import '../../css/b/b13va5b-o.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="vqcxf6bxf"/><path class="b13va5b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:compass-alt-o"} {...others} />);
}

export default Component;
