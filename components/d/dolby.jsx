import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3bmiqbso.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i3bmiqbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:dolby"} {...others} />);
}

export default Component;
