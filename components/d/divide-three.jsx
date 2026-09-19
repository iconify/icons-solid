import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bfxf_z8fm.css';
import '../../css/q/qtopk50fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bfxf_z8fm"/><path class="qtopk50fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:divide-three"} {...others} />);
}

export default Component;
