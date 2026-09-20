import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ijvlnob_b.css';
import '../../css/y/yqaeyhb-p.css';
import '../../css/a/a-fwg2jzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="ijvlnob_b"/><rect class="yqaeyhb-p"/><path class="a-fwg2jzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:microwave"} {...others} />);
}

export default Component;
