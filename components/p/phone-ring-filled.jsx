import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5rchq8iq.css';
import '../../css/j/j5gksabhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z5rchq8iq"/><path class="j5gksabhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:phone-ring-filled"} {...others} />);
}

export default Component;
