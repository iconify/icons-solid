import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw4clab2s.css';
import '../../css/z/zdb6vcbxv.css';
import '../../css/g/gzjs6uf3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xw4clab2s"/><path class="zdb6vcbxv"/><path class="gzjs6uf3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earbuds-check"} {...others} />);
}

export default Component;
