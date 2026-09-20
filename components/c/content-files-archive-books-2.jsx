import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtkzo6vvu.css';
import '../../css/w/w9a7ojbxe.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dtkzo6vvu"/><path class="w9a7ojbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-archive-books-2"} {...others} />);
}

export default Component;
