import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw8972b9d.css';
import '../../css/p/pxzoqyb-w.css';
import '../../css/s/skcmeg75t.css';
import '../../css/u/u_acmivgm.css';

const viewBox = {"width":512,"height":512};
const content = `<path vector-effect="non-scaling-stroke" class="jw8972b9d"/><path vector-effect="non-scaling-stroke" class="pxzoqyb-w"/><path class="skcmeg75t"/><path class="u_acmivgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spoolman"} {...others} />);
}

export default Component;
