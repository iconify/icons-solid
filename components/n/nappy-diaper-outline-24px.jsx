import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dy34skkvj.css';
import '../../css/b/blgg_0kdx.css';
import '../../css/s/sg0mjm65i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dy34skkvj"/><path clip-rule="evenodd" class="blgg_0kdx"/><path class="sg0mjm65i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:nappy-diaper-outline-24px"} {...others} />);
}

export default Component;
