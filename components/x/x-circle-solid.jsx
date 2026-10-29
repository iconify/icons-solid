import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qru5rt3-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qru5rt3-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:x-circle-solid"} {...others} />);
}

export default Component;
