import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i154zcy8g.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="i154zcy8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:search-arrow-increase-remix"} {...others} />);
}

export default Component;
