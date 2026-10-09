import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0-a1391i.css';
import '../../css/a/a8ib1rb2l.css';
import '../../css/h/h0q19snmg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w0-a1391i"/><path class="a8ib1rb2l"/><path class="h0q19snmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-charging-48-bold"} {...others} />);
}

export default Component;
