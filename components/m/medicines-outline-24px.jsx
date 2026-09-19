import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0it0b3fh.css';
import '../../css/d/dnmg3kr7o.css';
import '../../css/p/pulfy-giw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a0it0b3fh"/><path class="dnmg3kr7o"/><path clip-rule="evenodd" class="pulfy-giw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medicines-outline-24px"} {...others} />);
}

export default Component;
