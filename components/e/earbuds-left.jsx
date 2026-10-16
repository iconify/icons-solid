import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opu_zgbun.css';
import '../../css/f/fdx9bm39w.css';
import '../../css/b/btlo4nkcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="opu_zgbun"/><path class="fdx9bm39w"/><path class="btlo4nkcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earbuds-left"} {...others} />);
}

export default Component;
