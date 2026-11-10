import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zsrof7c5v.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zsrof7c5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:calendar-check-16-solid"} {...others} />);
}

export default Component;
