import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p78v6bc7c.css';
import '../../css/h/hdgfpybio.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p78v6bc7c"/><path class="hdgfpybio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:safari"} {...others} />);
}

export default Component;
