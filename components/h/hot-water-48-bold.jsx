import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0fqkdb-z.css';
import '../../css/z/zrpz3wb1c.css';
import '../../css/s/soun1mbat.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s0fqkdb-z"/><path class="zrpz3wb1c"/><path class="soun1mbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-water-48-bold"} {...others} />);
}

export default Component;
