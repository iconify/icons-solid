import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeg-p9o_z.css';
import '../../css/l/ltl30k2-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zeg-p9o_z"/><path class="ltl30k2-b primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flow-manual-input-duo"} {...others} />);
}

export default Component;
