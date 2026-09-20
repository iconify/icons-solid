import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv8ezdbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nv8ezdbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:face-smile"} {...others} />);
}

export default Component;
