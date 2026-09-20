import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yah-9lw2m.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="yah-9lw2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:definition-search-book-remix"} {...others} />);
}

export default Component;
