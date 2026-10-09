import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mli097arj.css';
import '../../css/c/c9abqnf6w.css';
import '../../css/q/qzu82cbok.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mli097arj"/><path class="c9abqnf6w"/><path class="qzu82cbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:expand-20-bold"} {...others} />);
}

export default Component;
