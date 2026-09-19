import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2qg-ubuc.css';
import '../../css/u/u5et5qd9b.css';
import '../../css/m/mab01i4rq.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="l2qg-ubuc"/><path class="u5et5qd9b"/><path class="mab01i4rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:router-wifi"} {...others} />);
}

export default Component;
