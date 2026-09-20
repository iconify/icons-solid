import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lclv7ft7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lclv7ft7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:microsoft-yammer-logo-1"} {...others} />);
}

export default Component;
