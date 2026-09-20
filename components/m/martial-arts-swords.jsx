import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbqtwbcin.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xbqtwbcin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:martial-arts-swords"} {...others} />);
}

export default Component;
