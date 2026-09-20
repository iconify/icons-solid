import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju9es9b_n.css';
import '../../css/y/ykp1m-x4i.css';
import '../../css/p/p3vpjjtxg.css';
import '../../css/h/huxd4ej0d.css';
import '../../css/x/x_-1pv9kw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ju9es9b_n"/><path class="ykp1m-x4i"/><path class="p3vpjjtxg"/><path class="huxd4ej0d"/><path class="x_-1pv9kw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:green-apple"} {...others} />);
}

export default Component;
