import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4z_drcgj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f4z_drcgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:friends-feed-logo-solid"} {...others} />);
}

export default Component;
