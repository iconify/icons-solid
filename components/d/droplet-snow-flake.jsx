import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sy7sdw84v.css';
import '../../css/h/hb8csvf_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sy7sdw84v"/><path class="hb8csvf_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:droplet-snow-flake"} {...others} />);
}

export default Component;
