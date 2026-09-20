import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5wkahb5o.css';
import '../../css/i/ibdum26cr.css';
import '../../css/w/wc-vucb_t.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="s5wkahb5o"/><path clip-rule="evenodd" class="ibdum26cr"/><path clip-rule="evenodd" class="wc-vucb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pinepods"} {...others} />);
}

export default Component;
