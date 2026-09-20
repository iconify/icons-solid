import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkr0r0bta.css';
import '../../css/q/qw6hk3bxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xkr0r0bta"/><path class="qw6hk3bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:train-3-line"} {...others} />);
}

export default Component;
