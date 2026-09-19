import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzgy0fb4f.css';
import '../../css/i/igl8n1bnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rzgy0fb4f"/><path class="igl8n1bnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:user-bag"} {...others} />);
}

export default Component;
