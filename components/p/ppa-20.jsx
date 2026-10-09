import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re0n-jb1b.css';
import '../../css/g/g55m-ob4k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="re0n-jb1b"/><path class="g55m-ob4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ppa-20"} {...others} />);
}

export default Component;
