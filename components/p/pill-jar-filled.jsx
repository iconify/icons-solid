import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1y3f6bsl.css';
import '../../css/o/oqas85b_h.css';
import '../../css/x/xi4oud6jq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z1y3f6bsl"/><path clip-rule="evenodd" class="oqas85b_h"/><path class="xi4oud6jq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pill-jar-filled"} {...others} />);
}

export default Component;
