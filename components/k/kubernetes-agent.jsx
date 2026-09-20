import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcueb5bha.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fcueb5bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:kubernetes-agent"} {...others} />);
}

export default Component;
