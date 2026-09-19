import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0ozv0b7j.css';
import '../../css/o/o3tx_8bof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w0ozv0b7j"/><path class="o3tx_8bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:action-chains-outlined"} {...others} />);
}

export default Component;
