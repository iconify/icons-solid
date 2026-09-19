import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-8oj-bac.css';
import '../../css/c/cvk2qf2tj.css';
import '../../css/r/rj20s6fub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t-8oj-bac"/><path class="cvk2qf2tj"/><path class="rj20s6fub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:shopping-card-add"} {...others} />);
}

export default Component;
