import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zafs64dhu.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/n/n4s5kf6pg.css';
import '../../css/u/uvm5r2b_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zafs64dhu"/><path class="gsvrl7yuk"/><path class="n4s5kf6pg"/><path class="uvm5r2b_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-user"} {...others} />);
}

export default Component;
