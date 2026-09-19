import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xikc5lbvd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xikc5lbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:coin-dollar"} {...others} />);
}

export default Component;
