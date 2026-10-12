import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3w4vb1f.css';
import '../../css/e/ee_xn034m.css';
import '../../css/j/jiu158igz.css';
import '../../css/u/u3l80fs-u.css';
import '../../css/u/u5kdk4b3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse transform="rotate(-180 12 5.23)" class="pd3w4vb1f"/><path class="ee_xn034m"/><ellipse transform="rotate(-180 12 5.23)" class="jiu158igz"/><path class="u3l80fs-u"/><path class="u5kdk4b3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:database-in"} {...others} />);
}

export default Component;
