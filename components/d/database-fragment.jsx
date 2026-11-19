import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3w4vb1f.css';
import '../../css/k/k_fs4t53y.css';
import '../../css/j/jiu158igz.css';
import '../../css/s/siozdbc_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="pd3w4vb1f"/><path class="k_fs4t53y"/><ellipse class="jiu158igz"/><path class="siozdbc_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:database-fragment"} {...others} />);
}

export default Component;
