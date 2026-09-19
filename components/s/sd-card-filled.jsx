import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdsb_nbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tdsb_nbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:sd-card-filled"} {...others} />);
}

export default Component;
