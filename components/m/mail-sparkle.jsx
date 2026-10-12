import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpjfusbsy.css';
import '../../css/c/c7y11bbmj.css';
import '../../css/x/x9jonbcdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wpjfusbsy"/><path class="c7y11bbmj"/><path class="x9jonbcdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-sparkle"} {...others} />);
}

export default Component;
