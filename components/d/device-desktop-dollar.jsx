import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv0o_sfja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mv0o_sfja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-desktop-dollar"} {...others} />);
}

export default Component;
