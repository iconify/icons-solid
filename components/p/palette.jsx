import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn7bfp_tc.css';
import '../../css/t/tfentzbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hn7bfp_tc"/><circle class="tfentzbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:palette"} {...others} />);
}

export default Component;
