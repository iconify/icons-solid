import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os8h-iwky.css';
import '../../css/l/l5-yow2gy.css';
import '../../css/k/kjbh0ussn.css';
import '../../css/e/emhyxh43w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="os8h-iwky"/><path class="l5-yow2gy"/><path class="kjbh0ussn"/><path class="emhyxh43w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-crash-duo"} {...others} />);
}

export default Component;
