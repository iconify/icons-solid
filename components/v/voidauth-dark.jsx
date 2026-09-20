import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5nok1bpn.css';
import '../../css/t/ty41gwbjw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b5nok1bpn"/><path class="ty41gwbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:voidauth-dark"} {...others} />);
}

export default Component;
