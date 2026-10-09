import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-bc1ybft.css';
import '../../css/a/a99zzxb0t.css';
import '../../css/f/fp91mvbdk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f-bc1ybft"/><path class="a99zzxb0t"/><path class="fp91mvbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-plus-20"} {...others} />);
}

export default Component;
