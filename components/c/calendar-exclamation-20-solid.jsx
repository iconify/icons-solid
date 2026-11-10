import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py1c9c1oh.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="py1c9c1oh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:calendar-exclamation-20-solid"} {...others} />);
}

export default Component;
