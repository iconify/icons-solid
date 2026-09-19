import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1c0n5wpc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1c0n5wpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:search-alt-2"} {...others} />);
}

export default Component;
