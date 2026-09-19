import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/ohlpaj_qx.css';
import '../../css/i/i6lvci1zi.css';
import '../../css/e/ejq2wacjo.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><circle class="ohlpaj_qx"/><path class="i6lvci1zi"/></g><circle class="ejq2wacjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:alert-error-stroke-12"} {...others} />);
}

export default Component;
