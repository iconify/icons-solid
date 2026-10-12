import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nggsvfq5m.css';
import '../../css/n/nibygifwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nggsvfq5m"/><path class="nibygifwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-end-point-none"} {...others} />);
}

export default Component;
