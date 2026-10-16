import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udb4q3cvm.css';
import '../../css/k/k4f35ou0d.css';
import '../../css/e/e8_sa6eqg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="udb4q3cvm"/><path class="k4f35ou0d"/><path class="e8_sa6eqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-search-20-bold"} {...others} />);
}

export default Component;
