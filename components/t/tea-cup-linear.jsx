import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/au_n9lj7l.css';
import '../../css/t/t0h-rybuv.css';
import '../../css/v/vt66uhuda.css';
import '../../css/p/pb4cfin7z.css';
import '../../css/w/winbtub7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="au_n9lj7l"/><path class="t0h-rybuv"/><path class="vt66uhuda"/><path class="pb4cfin7z"/><path class="winbtub7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tea-cup-linear"} {...others} />);
}

export default Component;
