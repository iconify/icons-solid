import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gekq4yo7t.css';
import '../../css/i/i7qoswbip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gekq4yo7t"/><path clip-rule="evenodd" class="i7qoswbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-5-seconds-back-bold-duotone"} {...others} />);
}

export default Component;
