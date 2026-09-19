import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkgfbqhls.css';
import '../../css/w/wckr9kb1z.css';
import '../../css/q/q285h9bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="zkgfbqhls"/><path class="wckr9kb1z"/><path class="q285h9bpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:universal-access"} {...others} />);
}

export default Component;
