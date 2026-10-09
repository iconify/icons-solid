import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrfvdrbva.css';
import '../../css/a/avxyqj62k.css';
import '../../css/h/hy5oa6obz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jrfvdrbva"/><path class="avxyqj62k"/><path class="hy5oa6obz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:printer-20-bold"} {...others} />);
}

export default Component;
