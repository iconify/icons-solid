import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_27zccek.css';
import '../../css/f/fzc1pacvu.css';
import '../../css/v/v4xocj2ex.css';
import '../../css/r/r854ffwgw.css';
import '../../css/l/l1m9l8btn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="q_27zccek"/><circle class="fzc1pacvu"/><path class="v4xocj2ex"/><circle class="r854ffwgw"/><circle class="l1m9l8btn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:options-duotone"} {...others} />);
}

export default Component;
