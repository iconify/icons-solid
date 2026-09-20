import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvfzt0b4h.css';
import '../../css/v/v563b2fgo.css';
import '../../css/f/fqidyvhbf.css';
import '../../css/o/od5nzu7ef.css';
import '../../css/m/m5o8pl3_p.css';
import '../../css/z/zy21-oe9s.css';
import '../../css/p/p32tiv2ct.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vvfzt0b4h"/><path class="v563b2fgo"/><path class="fqidyvhbf"/><path class="od5nzu7ef"/><path class="m5o8pl3_p"/><path class="zy21-oe9s"/><path class="p32tiv2ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:haproxy"} {...others} />);
}

export default Component;
