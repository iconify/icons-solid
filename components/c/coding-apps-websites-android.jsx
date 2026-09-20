import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y41-qlm3b.css';
import '../../css/l/l3zj_8btg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y41-qlm3b"/><path class="l3zj_8btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-android"} {...others} />);
}

export default Component;
