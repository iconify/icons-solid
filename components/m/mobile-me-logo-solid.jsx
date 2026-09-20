import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j89vr6sxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j89vr6sxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:mobile-me-logo-solid"} {...others} />);
}

export default Component;
