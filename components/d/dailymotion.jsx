import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpm8a6xpl.css';
import '../../css/y/yvc722b9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kpm8a6xpl"/><path class="yvc722b9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:dailymotion"} {...others} />);
}

export default Component;
