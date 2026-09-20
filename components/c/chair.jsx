import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr_ojxbiy.css';
import '../../css/n/nr6iob5xa.css';
import '../../css/j/jv7dyx2xs.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/y/yyyukfddm.css';
import '../../css/k/kljvqjkjf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tr_ojxbiy"/><path class="nr6iob5xa"/><path class="jv7dyx2xs"/><g class="brzn_0bpr"><path class="yyyukfddm"/><path class="kljvqjkjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:chair"} {...others} />);
}

export default Component;
