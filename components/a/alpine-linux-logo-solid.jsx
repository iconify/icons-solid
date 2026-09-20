import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v29uo-_ja.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v29uo-_ja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:alpine-linux-logo-solid"} {...others} />);
}

export default Component;
