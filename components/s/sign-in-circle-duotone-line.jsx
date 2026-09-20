import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ooi5qebet.css';
import '../../css/a/ami1cmbfc.css';
import '../../css/u/ur667qb_y.css';
import '../../css/z/zxl3zgpgv.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGl2nz2crW"><g class="ft5dv1b6b"><circle transform="matrix(0 -1 -1 0 22 20)" class="ooi5qebet"/><path class="ami1cmbfc"/><path class="ur667qb_y"/><path class="zxl3zgpgv"/></g></mask></defs><path mask="url(#SVGl2nz2crW)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sign-in-circle-duotone-line"} {...others} />);
}

export default Component;
