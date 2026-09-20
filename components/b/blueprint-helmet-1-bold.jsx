import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydla-ob9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ydla-ob9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:blueprint-helmet-1-bold"} {...others} />);
}

export default Component;
