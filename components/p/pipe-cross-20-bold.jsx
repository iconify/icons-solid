import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekeuohc1r.css';
import '../../css/s/su_ej-b1h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ekeuohc1r"/><path class="su_ej-b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-cross-20-bold"} {...others} />);
}

export default Component;
