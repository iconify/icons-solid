import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1guqcscz.css';
import '../../css/o/ontwibcre.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="o1guqcscz"/><path class="ontwibcre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:noodles"} {...others} />);
}

export default Component;
