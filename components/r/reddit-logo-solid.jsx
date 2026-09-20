import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4nqusb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b4nqusb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:reddit-logo-solid"} {...others} />);
}

export default Component;
