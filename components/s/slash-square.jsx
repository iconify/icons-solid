import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzxxazbhm.css';
import '../../css/b/bvvfqobxr.css';
import '../../css/x/x04hhgb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 21.06 2.8)" class="uzxxazbhm"/><rect transform="rotate(90 21.06 2.8)" class="bvvfqobxr"/><path class="x04hhgb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:slash-square"} {...others} />);
}

export default Component;
