import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya2ssjs1d.css';
import '../../css/y/yxk_uibgr.css';
import '../../css/q/qxtj0v7jh.css';
import '../../css/w/w72lbhmvq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ya2ssjs1d"/><path class="yxk_uibgr"/><path class="qxtj0v7jh"/><path class="w72lbhmvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:folding-hand-fan"} {...others} />);
}

export default Component;
