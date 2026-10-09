import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1mcems0k.css';
import '../../css/y/ydsujbbpq.css';
import '../../css/r/r86n_3b9c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1mcems0k"/><path class="ydsujbbpq"/><path class="r86n_3b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-sun-20-bold"} {...others} />);
}

export default Component;
