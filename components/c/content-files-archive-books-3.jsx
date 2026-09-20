import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7r7x_-5t.css';
import '../../css/d/d1yg4gbal.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k7r7x_-5t"/><path class="d1yg4gbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-archive-books-3"} {...others} />);
}

export default Component;
