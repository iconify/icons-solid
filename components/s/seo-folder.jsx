import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/msv6_bc6s.css';
import '../../css/e/eowf-ngqj.css';
import '../../css/s/s89v55brw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcXNH2dMl"><g class="s9cl3zbei"><path class="msv6_bc6s"/><path class="eowf-ngqj"/><path class="s89v55brw"/></g></mask></defs><path mask="url(#SVGcXNH2dMl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:seo-folder"} {...others} />);
}

export default Component;
