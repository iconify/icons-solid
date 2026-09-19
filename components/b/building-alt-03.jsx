import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu4velb3r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fu4velb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:building-alt-03"} {...others} />);
}

export default Component;
