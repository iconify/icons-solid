import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/x/xkvfz37jb.css';
import '../../css/n/ng80-_bnb.css';
import '../../css/u/ukeh4mbcm.css';
import '../../css/b/b9smcsrpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="xkvfz37jb"/><path class="ng80-_bnb"/><path class="ukeh4mbcm"/><path class="b9smcsrpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:swatch-book"} {...others} />);
}

export default Component;
