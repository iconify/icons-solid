import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5i3s9bgs.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="w5i3s9bgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:pod"} {...others} />);
}

export default Component;
