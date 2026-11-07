import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2j0411cb.css';
import '../../css/r/rormt7btc.css';
import '../../css/n/nn1-acc4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a2j0411cb"/><path class="rormt7btc"/><path class="nn1-acc4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-off-outline"} {...others} />);
}

export default Component;
