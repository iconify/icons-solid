import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjvs1cblk.css';
import '../../css/i/i81te_6rg.css';
import '../../css/u/u29l2rupw.css';
import '../../css/a/a_cxysblf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mjvs1cblk"/><path class="i81te_6rg"/><path class="u29l2rupw"/><path class="a_cxysblf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:unlocked"} {...others} />);
}

export default Component;
