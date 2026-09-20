import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvcqaccok.css';
import '../../css/j/jhhyfu85f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uvcqaccok"/><path class="jhhyfu85f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-books-2"} {...others} />);
}

export default Component;
