import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pio5sybgp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pio5sybgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:vertical-split-outline"} {...others} />);
}

export default Component;
