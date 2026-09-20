import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2z5elgja.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c2z5elgja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:evernote-logo-solid"} {...others} />);
}

export default Component;
