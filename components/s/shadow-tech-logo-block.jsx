import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcskt3amy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tcskt3amy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:shadow-tech-logo-block"} {...others} />);
}

export default Component;
