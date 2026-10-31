import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bg2fqfxmz.css';
import '../../css/q/q_h3vjbce.css';
import '../../css/c/co_a6dbew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bg2fqfxmz wm-shadow"/><path class="q_h3vjbce wm-shadow"/><path class="co_a6dbew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:loader"} {...others} />);
}

export default Component;
