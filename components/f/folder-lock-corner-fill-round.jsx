import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ap8e4tb7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ap8e4tb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-lock-corner-fill-round"} {...others} />);
}

export default Component;
