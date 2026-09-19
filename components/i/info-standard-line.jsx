import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srt32fbam.css';
import '../../css/s/s76ldob_q.css';
import '../../css/b/bp242uqss.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-outline clr-i-outline-path-1 srt32fbam"/><path class="clr-i-outline clr-i-outline-path-2 s76ldob_q"/><path class="bp242uqss clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:info-standard-line"} {...others} />);
}

export default Component;
