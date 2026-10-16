import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urx8x1bxz.css';
import '../../css/n/nlzn_o26i.css';
import '../../css/z/zdzbjuxfw.css';
import '../../css/e/e8_sa6eqg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="urx8x1bxz"/><path class="nlzn_o26i"/><path class="zdzbjuxfw"/><path class="e8_sa6eqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-search-20-bold"} {...others} />);
}

export default Component;
