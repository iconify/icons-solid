import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q21hny20d.css';
import '../../css/m/mcr7zubuf.css';
import '../../css/s/s0l0zu_qn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q21hny20d"/><path class="mcr7zubuf"/><path class="s0l0zu_qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:line"} {...others} />);
}

export default Component;
