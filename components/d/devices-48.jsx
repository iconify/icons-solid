import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di__cabvm.css';
import '../../css/j/j8d93dwgj.css';
import '../../css/h/hxtxelb0w.css';
import '../../css/s/sqfcwibec.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="di__cabvm"/><path class="j8d93dwgj"/><path class="hxtxelb0w"/><path class="sqfcwibec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:devices-48"} {...others} />);
}

export default Component;
