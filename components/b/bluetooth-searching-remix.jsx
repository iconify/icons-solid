import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdl14fb2t.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fdl14fb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:bluetooth-searching-remix"} {...others} />);
}

export default Component;
