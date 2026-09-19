import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qryyscb4x.css';
import '../../css/s/siitcdcqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qryyscb4x"/><path class="siitcdcqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:phone-incoming"} {...others} />);
}

export default Component;
