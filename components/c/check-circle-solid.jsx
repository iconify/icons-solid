import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vj5w2w0co.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vj5w2w0co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:check-circle-solid"} {...others} />);
}

export default Component;
