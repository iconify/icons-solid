import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayho2yb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ayho2yb_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:500px-logo-2-solid"} {...others} />);
}

export default Component;
