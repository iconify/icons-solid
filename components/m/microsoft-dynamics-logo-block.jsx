import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx0gpq2uu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qx0gpq2uu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:microsoft-dynamics-logo-block"} {...others} />);
}

export default Component;
