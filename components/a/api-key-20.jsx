import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq3i9_lhj.css';
import '../../css/x/x_1bpc-0g.css';
import '../../css/q/qdghjzejf.css';
import '../../css/c/c5hkgdbil.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lq3i9_lhj"/><path class="x_1bpc-0g"/><path class="qdghjzejf"/><path class="c5hkgdbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:api-key-20"} {...others} />);
}

export default Component;
