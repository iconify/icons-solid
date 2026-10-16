import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj4vzjb5q.css';
import '../../css/v/vnif4gbyf.css';
import '../../css/y/ye5cuebhj.css';
import '../../css/i/iclthgb7p.css';
import '../../css/n/nrwsk66dz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kj4vzjb5q"/><path class="vnif4gbyf"/><path class="ye5cuebhj"/><path class="iclthgb7p"/><path class="nrwsk66dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:repowering-20"} {...others} />);
}

export default Component;
