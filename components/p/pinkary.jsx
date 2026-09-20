import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0noxxbmb.css';
import '../../css/y/y46o0xb-b.css';
import '../../css/y/y2vg62bil.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="s0noxxbmb"/><path class="y46o0xb-b"/><path class="y2vg62bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pinkary"} {...others} />);
}

export default Component;
