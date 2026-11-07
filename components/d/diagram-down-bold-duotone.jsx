import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd1ch4bgm.css';
import '../../css/l/l_tzrhbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zd1ch4bgm"/><path class="l_tzrhbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diagram-down-bold-duotone"} {...others} />);
}

export default Component;
