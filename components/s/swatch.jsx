import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfkacmblt.css';
import '../../css/q/qww1sgbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfkacmblt"/><path class="qww1sgbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:swatch"} {...others} />);
}

export default Component;
