import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhpma-sca.css';
import '../../css/k/kyb_5vwwp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vhpma-sca"/><path class="kyb_5vwwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:trash-stroke-20"} {...others} />);
}

export default Component;
