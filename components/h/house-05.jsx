import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zfkc1gbeo.css';
import '../../css/i/iojmo55ly.css';
import '../../css/y/y31lx-nom.css';
import '../../css/f/fht7p77jy.css';
import '../../css/w/wn_trabmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zfkc1gbeo"/><path class="iojmo55ly"/><path class="y31lx-nom"/><path class="fht7p77jy"/><path class="wn_trabmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:house-05"} {...others} />);
}

export default Component;
