import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hxe6apb_t.css';
import '../../css/a/adiuw0bdq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="hxe6apb_t"/><path class="adiuw0bdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:blk"} {...others} />);
}

export default Component;
