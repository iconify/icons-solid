import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yle_06b4x.css';
import '../../css/r/r14k82bhm.css';
import '../../css/e/egcu1pv4r.css';
import '../../css/p/pwl9v1bkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yle_06b4x"/><path class="r14k82bhm"/><path class="egcu1pv4r"/><path class="pwl9v1bkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:binocular"} {...others} />);
}

export default Component;
