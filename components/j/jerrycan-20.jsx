import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_reqgbqv.css';
import '../../css/l/la3dn2r7d.css';
import '../../css/u/ubtst-b_b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n_reqgbqv"/><path class="la3dn2r7d"/><path class="ubtst-b_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jerrycan-20"} {...others} />);
}

export default Component;
