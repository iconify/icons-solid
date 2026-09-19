import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xgh_v0bqf.css';
import '../../css/r/rfxb2ac1m.css';
import '../../css/g/g4snsobji.css';
import '../../css/f/f50qibbkr.css';
import '../../css/q/qqaij487o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGC1FBjtoG"><g class="s9cl3zbei"><path class="xgh_v0bqf"/><path class="rfxb2ac1m"/><path class="g4snsobji"/><path class="f50qibbkr"/><path class="qqaij487o"/></g></mask></defs><path mask="url(#SVGC1FBjtoG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:school"} {...others} />);
}

export default Component;
