import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcgr1exts.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fcgr1exts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:rock-and-roll-hand-solid"} {...others} />);
}

export default Component;
