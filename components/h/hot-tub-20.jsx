import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yeyvl7vpf.css';
import '../../css/w/wzh_nvbqg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yeyvl7vpf"/><path class="wzh_nvbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-tub-20"} {...others} />);
}

export default Component;
