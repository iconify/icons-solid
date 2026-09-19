import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btn1pnkzi.css';
import '../../css/c/c9jj_-b_j.css';
import '../../css/g/gniowmb9x.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="btn1pnkzi"/><path class="c9jj_-b_j"/><path class="gniowmb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:data-board"} {...others} />);
}

export default Component;
