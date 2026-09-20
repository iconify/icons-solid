import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqfje-b4x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xqfje-b4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:unfold-less-horizontal"} {...others} />);
}

export default Component;
