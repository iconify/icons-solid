import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m643enbfo.css';
import '../../css/x/xd0tx35ws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m643enbfo"/><path class="xd0tx35ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:messages-bubble-square-graph"} {...others} />);
}

export default Component;
