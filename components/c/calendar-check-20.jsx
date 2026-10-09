import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-bc1ybft.css';
import '../../css/a/a394r9b2o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f-bc1ybft"/><path class="a394r9b2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-check-20"} {...others} />);
}

export default Component;
