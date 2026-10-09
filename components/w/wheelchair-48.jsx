import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnm3l5bqe.css';
import '../../css/e/ehym_vpmn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lnm3l5bqe"/><path class="ehym_vpmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wheelchair-48"} {...others} />);
}

export default Component;
