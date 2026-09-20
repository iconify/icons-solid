import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi8ammb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wi8ammb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-ads-logo-solid"} {...others} />);
}

export default Component;
