import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmueesepy.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tmueesepy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:inbox-16-solid"} {...others} />);
}

export default Component;
