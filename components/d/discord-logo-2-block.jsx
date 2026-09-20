import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmt9_z-xl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qmt9_z-xl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:discord-logo-2-block"} {...others} />);
}

export default Component;
