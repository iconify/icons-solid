import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il0bcibcq.css';
import '../../css/z/z8-myrbjy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="il0bcibcq"/><path class="z8-myrbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:temperature-20"} {...others} />);
}

export default Component;
