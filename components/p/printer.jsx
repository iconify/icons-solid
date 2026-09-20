import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if49zsb2k.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="if49zsb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:printer"} {...others} />);
}

export default Component;
