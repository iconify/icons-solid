import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4d9iffrr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i4d9iffrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-audio-logo-solid"} {...others} />);
}

export default Component;
