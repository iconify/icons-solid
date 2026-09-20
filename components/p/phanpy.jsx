import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgurcpj7h.css';
import '../../css/a/atrsdobrn.css';
import '../../css/o/omq70qpka.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qgurcpj7h"/><path class="atrsdobrn"/><path class="omq70qpka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:phanpy"} {...others} />);
}

export default Component;
