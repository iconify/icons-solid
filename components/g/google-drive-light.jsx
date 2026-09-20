import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo1ap9bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mo1ap9bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:google-drive-light"} {...others} />);
}

export default Component;
