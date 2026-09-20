import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk3eoukfo.css';
import '../../css/b/bstbd176c.css';
import '../../css/d/ds69pvbkp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qk3eoukfo"/><path class="bstbd176c"/><path class="ds69pvbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:configarr"} {...others} />);
}

export default Component;
