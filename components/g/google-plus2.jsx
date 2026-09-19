import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph1k-ccyi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ph1k-ccyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:google-plus2"} {...others} />);
}

export default Component;
