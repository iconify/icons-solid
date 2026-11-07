import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd1ch4bgm.css';
import '../../css/d/dejpxbc6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zd1ch4bgm"/><path class="dejpxbc6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diagram-up-bold-duotone"} {...others} />);
}

export default Component;
