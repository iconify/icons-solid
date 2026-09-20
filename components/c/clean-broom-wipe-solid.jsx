import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3v7l-00h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w3v7l-00h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:clean-broom-wipe-solid"} {...others} />);
}

export default Component;
