import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sad50o9nr.css';
import '../../css/q/q-ha4poyz.css';
import '../../css/u/u0muthbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sad50o9nr"/><path class="q-ha4poyz"/><path class="u0muthbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:photo-changed-filter-bold"} {...others} />);
}

export default Component;
