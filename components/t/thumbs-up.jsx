import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yb5o5ib6c.css';
import '../../css/l/lnv-e_0ad.css';
import '../../css/t/txfzb7jvv.css';
import '../../css/r/r1_soeb4m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yb5o5ib6c"/><path class="lnv-e_0ad"/><path class="txfzb7jvv"/><path class="r1_soeb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:thumbs-up"} {...others} />);
}

export default Component;
