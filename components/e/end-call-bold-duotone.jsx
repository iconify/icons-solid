import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfwi7necl.css';
import '../../css/b/bohfcinem.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rfwi7necl"/><path class="bohfcinem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:end-call-bold-duotone"} {...others} />);
}

export default Component;
