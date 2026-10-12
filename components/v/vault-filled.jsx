import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwd45ta4x.css';
import '../../css/x/xjwgdc_uw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwd45ta4x"/><path clip-rule="evenodd" class="xjwgdc_uw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:vault-filled"} {...others} />);
}

export default Component;
