import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um721dv4z.css';
import '../../css/w/w96bn_bsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="um721dv4z"/><path class="w96bn_bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:duck"} {...others} />);
}

export default Component;
