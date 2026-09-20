import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5-cnf51v.css';
import '../../css/i/i3c3lsm5m.css';
import '../../css/w/wymu7mbbp.css';
import '../../css/z/zzfya7bbg.css';
import '../../css/w/wjbvnwbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p5-cnf51v"/><path class="i3c3lsm5m"/><path class="wymu7mbbp"/><path class="zzfya7bbg"/><path class="wjbvnwbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:paypal-logo"} {...others} />);
}

export default Component;
