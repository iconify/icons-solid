import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpcp248iu.css';
import '../../css/w/wt-ac1bhr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dpcp248iu"/><path class="wt-ac1bhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:coin-yen"} {...others} />);
}

export default Component;
