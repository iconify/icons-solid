import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv2_z3-bi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv2_z3-bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-rounded-number-0-filled"} {...others} />);
}

export default Component;
