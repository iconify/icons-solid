import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-bc1ybft.css';
import '../../css/f/f5keg8bhn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f-bc1ybft"/><path class="f5keg8bhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-20"} {...others} />);
}

export default Component;
