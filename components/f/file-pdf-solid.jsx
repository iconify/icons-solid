import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni3q_32ln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ni3q_32ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-pdf-solid"} {...others} />);
}

export default Component;
