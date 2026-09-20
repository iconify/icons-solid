import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy5xjlxhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zy5xjlxhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:auto-awesome-motion"} {...others} />);
}

export default Component;
