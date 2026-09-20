import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8enqgb6g.css';
import '../../css/r/rm0lvsbgg.css';
import '../../css/z/zrdmtrb2f.css';
import '../../css/u/uxgp4abzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w8enqgb6g"/><path class="rm0lvsbgg"/><path class="zrdmtrb2f"/><path class="uxgp4abzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:apple-logo"} {...others} />);
}

export default Component;
