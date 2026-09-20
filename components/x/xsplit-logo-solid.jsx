import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-67u_bfy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p-67u_bfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:xsplit-logo-solid"} {...others} />);
}

export default Component;
