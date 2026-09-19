import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/raliu5b3x.css';
import '../../css/d/d1olnibrd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="raliu5b3x"/><path class="d1olnibrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:volume-medium"} {...others} />);
}

export default Component;
