import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh1j5ublv.css';
import '../../css/d/dzvme4b_s.css';
import '../../css/z/z8__jxbtc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="uh1j5ublv"/><circle class="dzvme4b_s"/><circle class="z8__jxbtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:smlight"} {...others} />);
}

export default Component;
