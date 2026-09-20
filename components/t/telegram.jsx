import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3wm8ghmk.css';
import '../../css/c/c6ogy1b5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d3wm8ghmk"/><path class="c6ogy1b5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:telegram"} {...others} />);
}

export default Component;
