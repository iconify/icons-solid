import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqlt9f4ny.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xqlt9f4ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:tidal-logo-solid"} {...others} />);
}

export default Component;
