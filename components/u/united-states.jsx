import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/d/dkr5qebiv.css';
import '../../css/p/pb_xy5vyx.css';
import '../../css/d/dohuy7b_l.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="dkr5qebiv"/><path class="pb_xy5vyx"/><path class="dohuy7b_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:united-states"} {...others} />);
}

export default Component;
