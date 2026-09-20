import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhcw76f0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yhcw76f0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-news-logo-solid"} {...others} />);
}

export default Component;
