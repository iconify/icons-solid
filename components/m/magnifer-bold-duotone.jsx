import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-tqdrbyb.css';
import '../../css/c/czuk_uaey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-tqdrbyb"/><path class="czuk_uaey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifer-bold-duotone"} {...others} />);
}

export default Component;
