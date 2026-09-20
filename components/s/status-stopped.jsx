import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnc9k-r_k.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="gnc9k-r_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:status-stopped"} {...others} />);
}

export default Component;
