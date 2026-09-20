import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vs6krb0lt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vs6krb0lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:zoom-in-line"} {...others} />);
}

export default Component;
