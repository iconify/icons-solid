import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dop_v-6bo.css';
import '../../css/q/qcna4wjtc.css';
import '../../css/c/ct7l-y_5r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dop_v-6bo"/><path class="qcna4wjtc"/><path class="ct7l-y_5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:filefolder"} {...others} />);
}

export default Component;
