import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzk42qbyr.css';
import '../../css/b/bsr_e2r7t.css';
import '../../css/b/bguuzc2kk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tzk42qbyr"/><path class="bsr_e2r7t"/><path class="bguuzc2kk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:syringe-20-bold"} {...others} />);
}

export default Component;
