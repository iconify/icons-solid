import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1b1yz-3b.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="w1b1yz-3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:plus"} {...others} />);
}

export default Component;
