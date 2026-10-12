import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dn_ldhlew.css';
import '../../css/r/rud6x7bdi.css';
import '../../css/z/zaqu-2byh.css';
import '../../css/f/fd7we2b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dn_ldhlew"/><path class="rud6x7bdi"/><path class="zaqu-2byh"/><path class="fd7we2b3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:swords"} {...others} />);
}

export default Component;
