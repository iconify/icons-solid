import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka8nnc9vk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ka8nnc9vk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:expand"} {...others} />);
}

export default Component;
