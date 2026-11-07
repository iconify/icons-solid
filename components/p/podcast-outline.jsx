import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqwv9fbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sqwv9fbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:podcast-outline"} {...others} />);
}

export default Component;
