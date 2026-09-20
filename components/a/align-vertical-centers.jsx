import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jsvivze7w.css';
import '../../css/s/s_py3bsnm.css';
import '../../css/d/db0h7xo_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jsvivze7w"/><rect transform="rotate(-90 7 19.75)" class="s_py3bsnm"/><rect transform="rotate(-90 4.5 10.25)" class="db0h7xo_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:align-vertical-centers"} {...others} />);
}

export default Component;
