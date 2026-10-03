import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbeixbb9a.css';
import '../../css/p/ppaop13hw.css';
import '../../css/o/ok0rzl7qm.css';

const viewBox = {"width":1000,"height":584.485};
const content = `<path class="vbeixbb9a"/><path class="ppaop13hw"/><path class="ok0rzl7qm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:best-buy"} {...others} />);
}

export default Component;
