import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bt_1mpo2v.css';
import '../../css/l/l1z-krb2f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="bt_1mpo2v"/><path class="l1z-krb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:escalator-up-flat"} {...others} />);
}

export default Component;
