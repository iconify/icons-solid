import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zcc2xqbte.css';
import '../../css/j/jaixgn-6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zcc2xqbte"/><path class="jaixgn-6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:playstation-gamepad"} {...others} />);
}

export default Component;
