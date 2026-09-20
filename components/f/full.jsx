import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssduyhgbk.css';
import '../../css/k/ktcdaovuf.css';
import '../../css/m/mwuopsbdz.css';
import '../../css/v/v2j0phshp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ssduyhgbk"/><path class="ktcdaovuf"/><path class="mwuopsbdz"/><path class="v2j0phshp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:full"} {...others} />);
}

export default Component;
