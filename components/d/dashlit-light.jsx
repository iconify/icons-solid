import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogns7qblp.css';
import '../../css/v/vqarvxxid.css';
import '../../css/g/gfgm58bvb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ogns7qblp"/><path class="vqarvxxid"/><path class="gfgm58bvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dashlit-light"} {...others} />);
}

export default Component;
