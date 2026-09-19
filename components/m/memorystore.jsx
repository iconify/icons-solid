import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc7tgwran.css';
import '../../css/r/rv7f2sbom.css';
import '../../css/z/zk1j0x1lv.css';
import '../../css/m/m99nb8bny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nc7tgwran"/><path class="rv7f2sbom"/><path class="zk1j0x1lv"/><path class="m99nb8bny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:memorystore"} {...others} />);
}

export default Component;
