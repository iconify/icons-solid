import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/gzks8bcyr.css';
import '../../css/w/wso75kn4e.css';
import '../../css/b/bbiysdm9e.css';
import '../../css/s/sarx32axf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="gzks8bcyr"/><circle class="wso75kn4e"/><path class="bbiysdm9e"/><path class="sarx32axf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:email-block"} {...others} />);
}

export default Component;
