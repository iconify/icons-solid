import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/piisj4nte.css';
import '../../css/n/nnrk7wb5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="piisj4nte"/><path class="nnrk7wb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:maximize4"} {...others} />);
}

export default Component;
