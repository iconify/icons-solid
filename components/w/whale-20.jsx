import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3t12zu5x.css';
import '../../css/i/io22ipbhv.css';
import '../../css/s/s63-krb-h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c3t12zu5x"/><path class="io22ipbhv"/><path class="s63-krb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whale-20"} {...others} />);
}

export default Component;
