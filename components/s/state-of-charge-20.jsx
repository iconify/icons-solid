import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oov7omrot.css';
import '../../css/a/a7x1lr5rq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oov7omrot"/><path class="a7x1lr5rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:state-of-charge-20"} {...others} />);
}

export default Component;
