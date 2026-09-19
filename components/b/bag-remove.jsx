import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pun70et_r.css';
import '../../css/s/s-qon6-ac.css';
import '../../css/c/c5iba_rmv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="pun70et_r"/><path class="s-qon6-ac"/><path class="c5iba_rmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:bag-remove"} {...others} />);
}

export default Component;
