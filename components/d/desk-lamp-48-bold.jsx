import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_chr5qqn.css';
import '../../css/b/bxqwznb6j.css';
import '../../css/q/q5_trsb-o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u_chr5qqn"/><path class="bxqwznb6j"/><path class="q5_trsb-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desk-lamp-48-bold"} {...others} />);
}

export default Component;
