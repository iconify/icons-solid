import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yse773b8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yse773b8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:imessage-logo"} {...others} />);
}

export default Component;
