import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rowqs7baj.css';
import '../../css/p/p_tfwbcxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rowqs7baj"/><path class="p_tfwbcxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-notification-fill"} {...others} />);
}

export default Component;
