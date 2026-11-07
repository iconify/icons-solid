import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8_v07a_t.css';
import '../../css/l/lnl964nao.css';
import '../../css/z/z4zklhbom.css';
import '../../css/y/yzrr_8gta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m8_v07a_t"/><path class="lnl964nao"/><path clip-rule="evenodd" class="z4zklhbom"/><path class="yzrr_8gta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-play-bold"} {...others} />);
}

export default Component;
