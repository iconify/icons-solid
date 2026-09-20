import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8e22g.css';
import '../../css/w/wh59vr.css';
import '../../css/b/b1urau.css';
import '../../css/u/ubmjts.css';
import '../../css/e/eyuyvm.css';
import '../../css/b/bmy0qq.css';
import '../../css/d/d-k-hl-x.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s8e22g wh59vr"/><path class="b1urau s8e22g ubmjts"/><path class="b1urau eyuyvm s8e22g"/><path class="b1urau bmy0qq s8e22g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:moon-rising-alt-twotone"} {...others} />);
}

export default Component;
