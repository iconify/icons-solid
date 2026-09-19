import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvp3xeyyy.css';
import '../../css/m/ml87_nbsm.css';
import '../../css/r/r9sv3-ufk.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="uvp3xeyyy"/><circle class="ml87_nbsm"/><path class="r9sv3-ufk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:egg"} {...others} />);
}

export default Component;
