import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcwpesbdp.css';
import '../../css/d/dxcl0tb7m.css';
import '../../css/i/iufaf7g1w.css';
import '../../css/g/grsyl7buz.css';
import '../../css/v/vlu66r-gt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tcwpesbdp"/><path class="dxcl0tb7m"/><path class="iufaf7g1w"/><path class="grsyl7buz"/><path class="vlu66r-gt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sj-1x1"} {...others} />);
}

export default Component;
