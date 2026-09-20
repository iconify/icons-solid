import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoym41box.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eoym41box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:arrow-cursor-move-remix"} {...others} />);
}

export default Component;
