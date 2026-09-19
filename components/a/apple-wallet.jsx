import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/giiz50bok.css';
import '../../css/x/xsr7m2l6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="giiz50bok"/><path class="xsr7m2l6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:apple-wallet"} {...others} />);
}

export default Component;
