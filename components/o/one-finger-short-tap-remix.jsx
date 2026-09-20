import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7by1o2ah.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w7by1o2ah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:one-finger-short-tap-remix"} {...others} />);
}

export default Component;
