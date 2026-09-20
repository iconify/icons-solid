import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/toef6xbjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="toef6xbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:500px-logo-2-block"} {...others} />);
}

export default Component;
