import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj_cxkkhb.css';
import '../../css/o/o6uly9l0b.css';
import '../../css/s/sn2vv6rhq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hj_cxkkhb"/><path class="o6uly9l0b"/><path class="sn2vv6rhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fanqiexiaoshuo"} {...others} />);
}

export default Component;
