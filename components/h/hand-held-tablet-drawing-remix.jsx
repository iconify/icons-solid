import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4sv3vfsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f4sv3vfsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hand-held-tablet-drawing-remix"} {...others} />);
}

export default Component;
