import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnm2d4hge.css';
import '../../css/y/yvoivnbda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wnm2d4hge"/><path class="yvoivnbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:x-shield"} {...others} />);
}

export default Component;
