import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-qc0_vlp.css';
import '../../css/a/amj39fbui.css';
import '../../css/x/xvig2ib6l.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="v-qc0_vlp"/><path class="amj39fbui"/><path class="xvig2ib6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:gauge"} {...others} />);
}

export default Component;
