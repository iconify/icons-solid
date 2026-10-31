import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tghj5bcrc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tghj5bcrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shirt-gloss"} {...others} />);
}

export default Component;
