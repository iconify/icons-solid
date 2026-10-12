import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pedr4_bjp.css';
import '../../css/f/f6h5kcc6e.css';
import '../../css/f/fw_ltzhjf.css';
import '../../css/i/iztk93-oh.css';
import '../../css/f/fq2ob0irn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pedr4_bjp"/><path class="f6h5kcc6e"/><path class="fw_ltzhjf"/><path class="iztk93-oh"/><path class="fq2ob0irn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:snail-48-bold"} {...others} />);
}

export default Component;
