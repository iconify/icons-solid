import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhry5e73f.css';
import '../../css/l/l6xq5rb2r.css';
import '../../css/t/tr3hbtb1n.css';
import '../../css/b/b8sr0ib_j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dhry5e73f"/><path class="l6xq5rb2r"/><path class="tr3hbtb1n"/><path class="b8sr0ib_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:technology-drone-camera"} {...others} />);
}

export default Component;
