import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2wzqxngm.css';
import '../../css/b/bb_4oobxv.css';
import '../../css/e/ej16q4bjl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d2wzqxngm"/><path class="bb_4oobxv"/><path class="ej16q4bjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:expand"} {...others} />);
}

export default Component;
