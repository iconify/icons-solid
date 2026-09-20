import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh4rs-bkb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gh4rs-bkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:video-subtitles-remix"} {...others} />);
}

export default Component;
