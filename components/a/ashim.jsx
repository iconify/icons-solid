import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr69-xtna.css';
import '../../css/b/b775vy07j.css';
import '../../css/r/rf0x18blv.css';
import '../../css/q/qkzg-vbia.css';
import '../../css/p/pdqjmt76a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wr69-xtna"/><path class="b775vy07j"/><path class="rf0x18blv"/><path class="qkzg-vbia"/><path class="pdqjmt76a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ashim"} {...others} />);
}

export default Component;
