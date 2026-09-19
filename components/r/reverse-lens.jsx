import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/etjiufbjy.css';
import '../../css/u/uioyaxcnw.css';
import '../../css/d/dfq1qtbfg.css';
import '../../css/s/s94jr3b8f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIbA3leUh"><g class="s9cl3zbei"><path class="etjiufbjy"/><path class="uioyaxcnw"/><path class="dfq1qtbfg"/><path class="s94jr3b8f"/></g></mask></defs><path mask="url(#SVGIbA3leUh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:reverse-lens"} {...others} />);
}

export default Component;
