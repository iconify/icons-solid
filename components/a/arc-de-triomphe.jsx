import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/sceen7deg.css';
import '../../css/o/obd0yacex.css';
import '../../css/k/kyp5fljps.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPVHP7CuH"><g class="rohhhzb0l"><path class="sceen7deg"/><path class="obd0yacex"/><path class="kyp5fljps"/></g></mask></defs><path mask="url(#SVGPVHP7CuH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:arc-de-triomphe"} {...others} />);
}

export default Component;
