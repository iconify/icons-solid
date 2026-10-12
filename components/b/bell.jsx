import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prlpklbro.css';
import '../../css/e/eu24tmeaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="prlpklbro"/><path class="eu24tmeaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bell"} {...others} />);
}

export default Component;
