import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqbkv8u2i.css';
import '../../css/b/b2g63qbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqbkv8u2i"/><path class="b2g63qbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-rewind-circle"} {...others} />);
}

export default Component;
