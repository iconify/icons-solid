import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh9114-ts.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kh9114-ts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:voice-mail-remix"} {...others} />);
}

export default Component;
