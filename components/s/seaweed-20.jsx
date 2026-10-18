import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncq58objw.css';
import '../../css/a/a9-2q4bgg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ncq58objw"/><path class="a9-2q4bgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seaweed-20"} {...others} />);
}

export default Component;
