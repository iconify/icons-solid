import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kqn0rlbqd.css';
import '../../css/y/ymtmr1bse.css';
import '../../css/j/jzhlgaceu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kqn0rlbqd"/><path class="ymtmr1bse"/><path class="jzhlgaceu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:power-circle"} {...others} />);
}

export default Component;
