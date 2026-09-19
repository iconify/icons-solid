import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enc17mb1s.css';
import '../../css/l/l7hcm5_mu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="enc17mb1s"/><path class="l7hcm5_mu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:next"} {...others} />);
}

export default Component;
