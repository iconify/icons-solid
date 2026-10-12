import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3erz0bos.css';
import '../../css/p/pmd_icbaj.css';
import '../../css/m/mee-cvixx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="j3erz0bos"/><rect class="pmd_icbaj"/><rect class="mee-cvixx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ungroup"} {...others} />);
}

export default Component;
