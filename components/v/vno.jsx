import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5-r_jvrt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m5-r_jvrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vno"} {...others} />);
}

export default Component;
