import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt4qdxb4y.css';
import '../../css/x/xoqcm6b1o.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="bt4qdxb4y"/><path class="xoqcm6b1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-edit"} {...others} />);
}

export default Component;
