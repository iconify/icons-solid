import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fizl9pbgx.css';
import '../../css/n/nq7w58mhy.css';
import '../../css/k/kh_i8p3mc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fizl9pbgx"/><path class="nq7w58mhy"/><path class="kh_i8p3mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:forceps"} {...others} />);
}

export default Component;
