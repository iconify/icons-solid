import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm_gj4b2t.css';
import '../../css/t/tfzexxbcu.css';
import '../../css/q/qqef1qxre.css';
import '../../css/g/g0sr1db5j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hm_gj4b2t"/><path class="tfzexxbcu"/><path class="qqef1qxre"/><path class="g0sr1db5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamystats"} {...others} />);
}

export default Component;
