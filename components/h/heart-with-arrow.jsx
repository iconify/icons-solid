import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm4miebwu.css';
import '../../css/k/kbtpf3fuc.css';
import '../../css/g/gcdi2ob1m.css';
import '../../css/o/oaxr94b2h.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zm4miebwu"/><path class="kbtpf3fuc"/><path class="gcdi2ob1m"/><path class="oaxr94b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:heart-with-arrow"} {...others} />);
}

export default Component;
