import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvd_t7aci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvd_t7aci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:lock"} {...others} />);
}

export default Component;
