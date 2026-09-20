import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yrdu6rmcg.css';
import '../../css/b/b3a367s2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yrdu6rmcg"/><path class="b3a367s2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:inbox-arrow-down"} {...others} />);
}

export default Component;
