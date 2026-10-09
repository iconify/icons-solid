import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfpjugbvy.css';
import '../../css/b/blnw30haf.css';
import '../../css/f/fox5ysyus.css';
import '../../css/k/kurs2nb8a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vfpjugbvy"/><path class="blnw30haf"/><path class="fox5ysyus"/><path class="kurs2nb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-home-48-bold"} {...others} />);
}

export default Component;
