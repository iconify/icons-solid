import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/str6i-nan.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="str6i-nan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:youtube-gaming-logo-3-solid"} {...others} />);
}

export default Component;
