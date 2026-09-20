import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-4_v9njk.css';
import '../../css/d/dw2j3ebeq.css';
import '../../css/s/st1ujobif.css';
import '../../css/r/r25huvknw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m-4_v9njk"/><path class="dw2j3ebeq"/><path class="st1ujobif"/><path class="r25huvknw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openshift"} {...others} />);
}

export default Component;
