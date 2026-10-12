import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dt923ym2f.css';
import '../../css/z/znje9cb0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dt923ym2f"/><path class="znje9cb0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wing"} {...others} />);
}

export default Component;
