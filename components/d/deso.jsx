import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzfci_b_j.css';
import '../../css/u/u3uqfyj5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rzfci_b_j"/><path class="u3uqfyj5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:deso"} {...others} />);
}

export default Component;
