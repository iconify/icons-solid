import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dsap07-cb.css';
import '../../css/u/u3rel2b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dsap07-cb"/><path class="u3rel2b7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-terminal"} {...others} />);
}

export default Component;
