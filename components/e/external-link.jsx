import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne464o5ch.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ne464o5ch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:external-link"} {...others} />);
}

export default Component;
