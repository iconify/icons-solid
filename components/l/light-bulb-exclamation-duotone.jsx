import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwr-9-b4c.css';
import '../../css/z/z2amuho-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iwr-9-b4c"/><path clip-rule="evenodd" class="z2amuho-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:light-bulb-exclamation-duotone"} {...others} />);
}

export default Component;
