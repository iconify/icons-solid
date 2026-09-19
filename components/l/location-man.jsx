import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmppwob5e.css';
import '../../css/o/o2w8gbcee.css';
import '../../css/v/vc01epbab.css';
import '../../css/n/nre--kigg.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="cmppwob5e"/><path class="o2w8gbcee"/><circle class="vc01epbab"/><path class="nre--kigg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:location-man"} {...others} />);
}

export default Component;
