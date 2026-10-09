import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuoptpb4g.css';
import '../../css/g/gyc_99q-h.css';
import '../../css/e/eqj-1vbam.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kuoptpb4g"/><path class="gyc_99q-h"/><path class="eqj-1vbam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-48"} {...others} />);
}

export default Component;
