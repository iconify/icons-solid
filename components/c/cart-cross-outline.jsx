import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7aqvqbvm.css';
import '../../css/x/xkutso85b.css';
import '../../css/r/rup4j16fw.css';
import '../../css/b/bogwy2v0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r7aqvqbvm"/><path clip-rule="evenodd" class="xkutso85b"/><path clip-rule="evenodd" class="rup4j16fw"/><path clip-rule="evenodd" class="bogwy2v0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-cross-outline"} {...others} />);
}

export default Component;
