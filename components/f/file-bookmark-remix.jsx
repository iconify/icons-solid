import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2soq456k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p2soq456k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:file-bookmark-remix"} {...others} />);
}

export default Component;
