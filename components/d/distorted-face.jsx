import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmnqfq9fv.css';
import '../../css/h/hjh88xboe.css';
import '../../css/u/u9c71mblg.css';
import '../../css/h/huuajhmrh.css';
import '../../css/y/y3o_mf5-z.css';
import '../../css/w/wna5v1bjq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fmnqfq9fv"/><path class="hjh88xboe"/><path class="u9c71mblg"/><circle class="huuajhmrh"/><path class="y3o_mf5-z"/><path class="wna5v1bjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:distorted-face"} {...others} />);
}

export default Component;
