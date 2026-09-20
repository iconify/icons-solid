import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3vw5xbmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i3vw5xbmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:forward-email-solid"} {...others} />);
}

export default Component;
