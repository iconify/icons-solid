import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a1ajnuogj.css';
import '../../css/d/dm30b_wvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="a1ajnuogj"/><path class="dm30b_wvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:volume-low"} {...others} />);
}

export default Component;
