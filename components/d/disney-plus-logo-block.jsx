import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8u5iic6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m8u5iic6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:disney-plus-logo-block"} {...others} />);
}

export default Component;
