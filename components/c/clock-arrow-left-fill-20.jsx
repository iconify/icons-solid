import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj2-olrwi.css';
import '../../css/i/ii3oq8bus.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bj2-olrwi"/><path class="ii3oq8bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clock-arrow-left-fill-20"} {...others} />);
}

export default Component;
