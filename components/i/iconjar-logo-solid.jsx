import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlkw1s6vn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dlkw1s6vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:iconjar-logo-solid"} {...others} />);
}

export default Component;
