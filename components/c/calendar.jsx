import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a1l88actq.css';
import '../../css/q/qky07pa_k.css';
import '../../css/u/u-38-obdd.css';
import '../../css/l/lx09hu3ir.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9XGDedMh"><g class="ufeehvblu"><path class="a1l88actq"/><path class="qky07pa_k"/><path class="u-38-obdd"/><path class="lx09hu3ir"/></g></mask></defs><path mask="url(#SVG9XGDedMh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:calendar"} {...others} />);
}

export default Component;
