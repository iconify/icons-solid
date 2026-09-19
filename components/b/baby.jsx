import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6yrezc4m.css';
import '../../css/m/mn0k_pbhq.css';
import '../../css/k/ky53lqr2y.css';
import '../../css/v/v0h1g-hvl.css';
import '../../css/y/yri8szb0n.css';
import '../../css/x/xjrzfo7dm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="x6yrezc4m"/><path class="mn0k_pbhq"/><path class="ky53lqr2y"/><path class="v0h1g-hvl"/><path class="yri8szb0n"/><path class="xjrzfo7dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:baby"} {...others} />);
}

export default Component;
