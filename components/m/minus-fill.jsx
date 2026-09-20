import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0e7lzicz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0e7lzicz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:minus-fill"} {...others} />);
}

export default Component;
