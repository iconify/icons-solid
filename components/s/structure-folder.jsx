import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lemzthfhi.css';
import '../../css/e/eq01h1enz.css';
import '../../css/w/wzt-yrb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lemzthfhi"/><path class="eq01h1enz"/><path class="wzt-yrb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:structure-folder"} {...others} />);
}

export default Component;
