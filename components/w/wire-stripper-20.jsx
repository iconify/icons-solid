import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stxp-tbqc.css';
import '../../css/u/ua2fsac2w.css';
import '../../css/z/z_6mclb3c.css';
import '../../css/x/xxnuzjbjb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="stxp-tbqc"/><path class="ua2fsac2w"/><path class="z_6mclb3c"/><path class="xxnuzjbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wire-stripper-20"} {...others} />);
}

export default Component;
