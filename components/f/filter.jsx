import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu6lcp3xb.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tu6lcp3xb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:filter"} {...others} />);
}

export default Component;
