import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyl23qbli.css';
import '../../css/t/t5e7my7ka.css';
import '../../css/v/vijoq8rto.css';
import '../../css/o/o1615ib4d.css';
import '../../css/b/b0xi1bjln.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uyl23qbli"/><path class="t5e7my7ka"/><path class="vijoq8rto"/><path class="o1615ib4d"/><path class="b0xi1bjln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:waving-hand-1"} {...others} />);
}

export default Component;
