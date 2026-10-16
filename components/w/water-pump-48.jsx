import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo717acqe.css';
import '../../css/l/lcl31_e5n.css';
import '../../css/d/dnr4xbcll.css';
import '../../css/b/bwer3vbep.css';
import '../../css/f/fqif2v-9n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lo717acqe"/><path class="lcl31_e5n"/><path class="dnr4xbcll"/><path class="bwer3vbep"/><path class="fqif2v-9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-pump-48"} {...others} />);
}

export default Component;
