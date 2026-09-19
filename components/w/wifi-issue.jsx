import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c_tfljbio.css';
import '../../css/t/tys149sxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c_tfljbio"/><path class="tys149sxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:wifi-issue"} {...others} />);
}

export default Component;
