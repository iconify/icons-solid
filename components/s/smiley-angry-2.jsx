import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7hm2xayt.css';
import '../../css/x/x0s-9cb3t.css';
import '../../css/b/bgw9sbckt.css';
import '../../css/y/yh1kbryel.css';
import '../../css/a/ac0d4cb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a7hm2xayt"/><path class="x0s-9cb3t"/><path class="bgw9sbckt"/><path class="yh1kbryel"/><path class="ac0d4cb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:smiley-angry-2"} {...others} />);
}

export default Component;
