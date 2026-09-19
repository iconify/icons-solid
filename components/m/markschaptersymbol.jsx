import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwtif3bjl.css';
import '../../css/h/h02ib-6ed.css';
import '../../css/y/yjpow2b-h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bwtif3bjl"/><path class="h02ib-6ed"/><path class="yjpow2b-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:markschaptersymbol"} {...others} />);
}

export default Component;
