import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp88epbqj.css';
import '../../css/r/rcznhb4ez.css';
import '../../css/g/geslw-b3s.css';
import '../../css/r/r2lv70bmu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pp88epbqj"/><path class="rcznhb4ez"/><path class="geslw-b3s"/><path class="r2lv70bmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:cross-mark"} {...others} />);
}

export default Component;
