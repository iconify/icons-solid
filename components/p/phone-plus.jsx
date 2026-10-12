import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/al339szkh.css';
import '../../css/q/qjey0nbqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="al339szkh"/><path class="qjey0nbqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:phone-plus"} {...others} />);
}

export default Component;
