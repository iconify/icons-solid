import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwfrq7b_a.css';
import '../../css/v/v27rigbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwfrq7b_a"/><path clip-rule="evenodd" class="v27rigbgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:omni"} {...others} />);
}

export default Component;
