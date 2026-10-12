import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlijh8b1j.css';
import '../../css/i/ii3oq8bus.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zlijh8b1j"/><path class="ii3oq8bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clock-arrow-right-fill-20"} {...others} />);
}

export default Component;
