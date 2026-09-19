import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yw5i6qv3n.css';
import '../../css/k/kl39pwmja.css';
import '../../css/f/f923tcc0b.css';
import '../../css/o/ocm-m7pvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yw5i6qv3n"/><path clip-rule="evenodd" class="kl39pwmja"/><path class="f923tcc0b"/><path clip-rule="evenodd" class="ocm-m7pvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vih-outline-24px"} {...others} />);
}

export default Component;
