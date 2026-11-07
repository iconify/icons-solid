import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7zn-235y.css';
import '../../css/b/banrz7b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r7zn-235y"/><path clip-rule="evenodd" class="banrz7b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:webcam-bold"} {...others} />);
}

export default Component;
