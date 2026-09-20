import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a2vrl2b4o.css';
import '../../css/a/auzyv3bch.css';
import '../../css/n/n_45qf4se.css';
import '../../css/m/md0ft93ee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a2vrl2b4o"/><path class="auzyv3bch"/><path class="n_45qf4se"/><path class="md0ft93ee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-arrow-line-duotone"} {...others} />);
}

export default Component;
