import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-93wacki.css';
import '../../css/p/p5711fb-v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b-93wacki"/><path class="p5711fb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tide-high-20"} {...others} />);
}

export default Component;
