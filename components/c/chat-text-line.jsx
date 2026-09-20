import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejtcomp1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejtcomp1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:chat-text-line"} {...others} />);
}

export default Component;
