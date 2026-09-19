import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jygy7jq_q.css';
import '../../css/d/db0zvdh4p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="jygy7jq_q"/><path class="db0zvdh4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-1"} {...others} />);
}

export default Component;
