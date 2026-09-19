import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp_m6ccqt.css';
import '../../css/w/w9zfbqsgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tp_m6ccqt"/><path class="w9zfbqsgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:webstorm"} {...others} />);
}

export default Component;
