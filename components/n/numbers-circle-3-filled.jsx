import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_22pptrb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p_22pptrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:numbers-circle-3-filled"} {...others} />);
}

export default Component;
