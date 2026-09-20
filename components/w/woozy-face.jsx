import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/c_feybcat.css';
import '../../css/z/z-ndurbgj.css';
import '../../css/o/oi9vaunya.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><circle class="huuajhmrh"/><path class="c_feybcat"/><path class="z-ndurbgj"/><path class="oi9vaunya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woozy-face"} {...others} />);
}

export default Component;
