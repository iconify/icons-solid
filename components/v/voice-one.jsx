import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/o/oc1o0hkfq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGx4eOVcfO"><g class="s9cl3zbei"><path class="oo_vs07_g"/><path class="oc1o0hkfq"/></g></mask></defs><path mask="url(#SVGx4eOVcfO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:voice-one"} {...others} />);
}

export default Component;
