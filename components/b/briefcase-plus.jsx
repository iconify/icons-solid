import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/she30qb6v.css';
import '../../css/k/knyufdnft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="she30qb6v"/><path class="knyufdnft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:briefcase-plus"} {...others} />);
}

export default Component;
