import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfrim3bft.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nfrim3bft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:amount-down-two-outline"} {...others} />);
}

export default Component;
