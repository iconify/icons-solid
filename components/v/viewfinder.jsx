import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/ykbumoigx.css';
import '../../css/k/kqqgs194l.css';
import '../../css/m/mlwciqb2o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpF3UGe0r"><g class="s9cl3zbei"><path class="ykbumoigx"/><path class="kqqgs194l"/><path class="mlwciqb2o"/></g></mask></defs><path mask="url(#SVGpF3UGe0r)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:viewfinder"} {...others} />);
}

export default Component;
