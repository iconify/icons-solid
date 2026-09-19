import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivom5o5ht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ivom5o5ht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-image-filled"} {...others} />);
}

export default Component;
