import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-y2ejbab.css';
import '../../css/s/sw2f4isvy.css';
import '../../css/h/hu8pwkj5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a-y2ejbab"/><path class="sw2f4isvy"/><path class="hu8pwkj5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:closet-2-bold-duotone"} {...others} />);
}

export default Component;
