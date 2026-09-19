import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pv0-h2mmf.css';
import '../../css/k/k77tepgtb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pv0-h2mmf"/><path class="k77tepgtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pine-tree"} {...others} />);
}

export default Component;
