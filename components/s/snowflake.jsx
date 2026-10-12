import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t29f6pbei.css';
import '../../css/h/h7l1m8bbl.css';
import '../../css/v/v2tnttj0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="t29f6pbei"/><path class="h7l1m8bbl"/><circle class="v2tnttj0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:snowflake"} {...others} />);
}

export default Component;
