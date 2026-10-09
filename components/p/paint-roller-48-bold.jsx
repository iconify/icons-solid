import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5xe2hu9u.css';
import '../../css/q/qxn5niypj.css';
import '../../css/m/mrnim2byg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e5xe2hu9u"/><path class="qxn5niypj"/><path class="mrnim2byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paint-roller-48-bold"} {...others} />);
}

export default Component;
