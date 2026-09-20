import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5z5-obzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s5z5-obzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:oculus-logo-block"} {...others} />);
}

export default Component;
