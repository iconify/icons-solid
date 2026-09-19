import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/p/pz5-7suga.css';
import '../../css/i/iibl-o2rj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtDqkQbSn"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="pz5-7suga"/><path class="iibl-o2rj"/></g></mask></defs><path mask="url(#SVGtDqkQbSn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ethernet-off"} {...others} />);
}

export default Component;
