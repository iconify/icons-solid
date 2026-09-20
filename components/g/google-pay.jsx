import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl_v98bei.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nl_v98bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:google-pay"} {...others} />);
}

export default Component;
