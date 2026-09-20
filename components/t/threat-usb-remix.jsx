import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp-m33bou.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pp-m33bou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:threat-usb-remix"} {...others} />);
}

export default Component;
