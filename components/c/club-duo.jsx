import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/digwz38ld.css';
import '../../css/n/nqbz-5bri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="digwz38ld secondary"/><path class="nqbz-5bri primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:club-duo"} {...others} />);
}

export default Component;
