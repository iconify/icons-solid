import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxbmvbc7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxbmvbc7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hexagon-plus-fill-round"} {...others} />);
}

export default Component;
