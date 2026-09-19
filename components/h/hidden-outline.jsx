import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/c/c1_zvmcqj.css';
import '../../css/z/zr7_nbbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="c1_zvmcqj"/><path class="zr7_nbbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:hidden-outline"} {...others} />);
}

export default Component;
