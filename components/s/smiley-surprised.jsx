import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bbro-aclm.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/r/rj8wk8f8k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="bbro-aclm"/><path class="r2th9g7qg"/><path class="rj8wk8f8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:smiley-surprised"} {...others} />);
}

export default Component;
