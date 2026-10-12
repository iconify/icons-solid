import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h87n4d6xw.css';
import '../../css/t/tp56ji7um.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h87n4d6xw"/><path class="tp56ji7um"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:airplane-landing"} {...others} />);
}

export default Component;
