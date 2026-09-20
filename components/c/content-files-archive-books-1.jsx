import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjxlhlb8t.css';
import '../../css/s/sv5erwbch.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qjxlhlb8t"/><path class="sv5erwbch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-archive-books-1"} {...others} />);
}

export default Component;
