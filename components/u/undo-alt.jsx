import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgc2aw0_a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kgc2aw0_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:undo-alt"} {...others} />);
}

export default Component;
