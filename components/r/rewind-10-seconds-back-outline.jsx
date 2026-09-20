import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccy0osbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ccy0osbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-10-seconds-back-outline"} {...others} />);
}

export default Component;
