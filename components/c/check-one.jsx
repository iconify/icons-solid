import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/k/knuydr5gc.css';
import '../../css/m/mvnbjsgkc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="knuydr5gc"/><path class="mvnbjsgkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:check-one"} {...others} />);
}

export default Component;
