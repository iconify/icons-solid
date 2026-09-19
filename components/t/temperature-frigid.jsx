import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omt7_bbav.css';
import '../../css/y/ymie1nvqo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="omt7_bbav"/><path class="ymie1nvqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:temperature-frigid"} {...others} />);
}

export default Component;
