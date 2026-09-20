import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf7inyggn.css';
import '../../css/j/jkq7-hbwz.css';
import '../../css/b/bl09rcbev.css';
import '../../css/p/ph-mjcb4f.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tf7inyggn"/><path class="jkq7-hbwz"/><path class="bl09rcbev"/><path class="ph-mjcb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bavaria-flag"} {...others} />);
}

export default Component;
