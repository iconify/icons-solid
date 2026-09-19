import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzl7znbzk.css';
import '../../css/u/uqsh6ibhf.css';
import '../../css/p/pr87757ke.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qzl7znbzk"/><path class="uqsh6ibhf"/><circle class="pr87757ke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:unlock"} {...others} />);
}

export default Component;
