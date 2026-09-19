import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5i_e_qgw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f5i_e_qgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:bank-safe"} {...others} />);
}

export default Component;
