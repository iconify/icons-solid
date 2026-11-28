import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5mmyei8x.css';
import '../../css/o/obv-dzbot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k5mmyei8x secondary"/><path class="obv-dzbot primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:stroke-line-join-bevel-duo"} {...others} />);
}

export default Component;
