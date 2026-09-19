import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/use6smbve.css';
import '../../css/h/hbc-02bvv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="use6smbve"/><path class="hbc-02bvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:inclusive-gateway"} {...others} />);
}

export default Component;
