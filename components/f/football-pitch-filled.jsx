import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3l_pqbpb.css';
import '../../css/l/lkwmxcc_x.css';
import '../../css/n/nsfh04bsk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v3l_pqbpb"/><path class="lkwmxcc_x"/><path class="nsfh04bsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:football-pitch-filled"} {...others} />);
}

export default Component;
