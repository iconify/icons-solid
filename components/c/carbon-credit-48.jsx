import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/h/hk7lwrn_z.css';
import '../../css/j/jid7bupwf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="hk7lwrn_z"/><path class="jid7bupwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-credit-48"} {...others} />);
}

export default Component;
