import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmf13pr7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmf13pr7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:menu-alt-3-duocolor-round"} {...others} />);
}

export default Component;
