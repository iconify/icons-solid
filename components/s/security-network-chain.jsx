import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoya6dbao.css';
import '../../css/m/m5l3mnb5w.css';
import '../../css/j/j_tp7ieis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aoya6dbao"/><path class="m5l3mnb5w"/><path class="j_tp7ieis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:security-network-chain"} {...others} />);
}

export default Component;
