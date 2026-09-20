import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spcbx1-oy.css';
import '../../css/b/beu2x0b4j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="spcbx1-oy"/><path clip-rule="evenodd" class="beu2x0b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:ppt-solid"} {...others} />);
}

export default Component;
