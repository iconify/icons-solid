import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc8h3_bgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oc8h3_bgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:vendor-microsoft"} {...others} />);
}

export default Component;
