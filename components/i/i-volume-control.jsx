import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spezjibom.css';
import '../../css/n/njxgolblu.css';
import '../../css/c/c8x0v5bdb.css';
import '../../css/c/ci4na7b_a.css';
import '../../css/a/a55x7e5ed.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="spezjibom"/><path class="njxgolblu"/><path class="c8x0v5bdb"/><path class="ci4na7b_a"/><path class="a55x7e5ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-volume-control"} {...others} />);
}

export default Component;
