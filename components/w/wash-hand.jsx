import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ifhkrrbnt.css';
import '../../css/d/dms_ct-jp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ifhkrrbnt"/><path class="dms_ct-jp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-hand"} {...others} />);
}

export default Component;
