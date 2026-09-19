import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k00a4g7yc.css';
import '../../css/o/otjvghwvk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k00a4g7yc"/><path class="otjvghwvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:application-virtual"} {...others} />);
}

export default Component;
