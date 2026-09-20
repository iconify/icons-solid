import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3c1b2blk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v3c1b2blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-hangouts-logo-solid"} {...others} />);
}

export default Component;
