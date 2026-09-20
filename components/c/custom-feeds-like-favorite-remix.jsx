import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdou84mty.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vdou84mty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:custom-feeds-like-favorite-remix"} {...others} />);
}

export default Component;
