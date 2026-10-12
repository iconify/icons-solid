import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_1_g2krb.css';
import '../../css/o/o-tazueek.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r_1_g2krb"/><path class="o-tazueek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cow-20"} {...others} />);
}

export default Component;
