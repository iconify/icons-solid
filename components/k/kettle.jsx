import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/iytdgvefu.css';
import '../../css/i/i103ase8k.css';
import '../../css/y/y0uc2-b4b.css';
import '../../css/y/yvqa4423l.css';
import '../../css/b/bhf7x1b4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="iytdgvefu"/><path class="i103ase8k"/><path class="y0uc2-b4b"/><path class="yvqa4423l"/><path class="bhf7x1b4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:kettle"} {...others} />);
}

export default Component;
