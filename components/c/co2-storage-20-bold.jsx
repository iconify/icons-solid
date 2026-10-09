import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq84rbcke.css';
import '../../css/r/rx5emixah.css';
import '../../css/k/kqwotpm_a.css';
import '../../css/k/kda2mgbyj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eq84rbcke"/><path class="rx5emixah"/><path class="kqwotpm_a"/><path class="kda2mgbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-storage-20-bold"} {...others} />);
}

export default Component;
