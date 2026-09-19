import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt-e5pb0j.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="rt-e5pb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-circle-fill-12"} {...others} />);
}

export default Component;
