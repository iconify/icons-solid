import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh_zu2l2j.css';
import '../../css/n/ndyez317g.css';
import '../../css/u/uh8eay1ng.css';
import '../../css/l/l_-pi6evi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bh_zu2l2j"/><path class="ndyez317g"/><path class="uh8eay1ng"/><path class="l_-pi6evi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ps-1x1"} {...others} />);
}

export default Component;
