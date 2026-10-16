import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frrc-qxwg.css';
import '../../css/h/hce5i4bzx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="frrc-qxwg"/><path class="hce5i4bzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:warming-stripes-20"} {...others} />);
}

export default Component;
