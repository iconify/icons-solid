import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eii_eh0ee.css';
import '../../css/u/uaiw1fbwq.css';
import '../../css/z/zzbikeb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eii_eh0ee"/><path class="uaiw1fbwq"/><path class="zzbikeb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-drops"} {...others} />);
}

export default Component;
