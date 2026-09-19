import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcz3a9bdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pcz3a9bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:chevron-left"} {...others} />);
}

export default Component;
