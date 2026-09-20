import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oku8xrlhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oku8xrlhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-bridge-logo-solid"} {...others} />);
}

export default Component;
