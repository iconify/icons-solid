import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a9och473a.css';
import '../../css/x/xz1ip7bdb.css';
import '../../css/o/o_zcbcbdy.css';
import '../../css/b/b5nky5blj.css';
import '../../css/x/xnbx16bkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a9och473a wm-shadow"/><path class="wm-shadow xz1ip7bdb"/><path class="o_zcbcbdy"/><path class="b5nky5blj"/><path class="xnbx16bkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:ship"} {...others} />);
}

export default Component;
