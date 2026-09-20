import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s05kiwb2w.css';
import '../../css/q/q96rhebcu.css';
import '../../css/o/o0pfhwbdc.css';
import '../../css/g/gq-pfyb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s05kiwb2w"/><path class="q96rhebcu"/><path class="o0pfhwbdc"/><path clip-rule="evenodd" class="gq-pfyb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-round-outline"} {...others} />);
}

export default Component;
