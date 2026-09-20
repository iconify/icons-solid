import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_d8u_bno.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_d8u_bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:direction-right-fill"} {...others} />);
}

export default Component;
