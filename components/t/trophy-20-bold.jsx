import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-0zjwbkw.css';
import '../../css/a/a1clh2bdx.css';
import '../../css/n/nzfznobps.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v-0zjwbkw"/><path class="a1clh2bdx"/><path class="nzfznobps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trophy-20-bold"} {...others} />);
}

export default Component;
