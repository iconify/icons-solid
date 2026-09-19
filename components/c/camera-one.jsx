import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yez7skblq.css';
import '../../css/z/zh_bpuben.css';
import '../../css/h/h2uo0wbmx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMRzgUPhe"><g class="aql7dnt-u"><circle class="yez7skblq"/><circle class="zh_bpuben"/><path class="h2uo0wbmx"/></g></mask></defs><path mask="url(#SVGMRzgUPhe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:camera-one"} {...others} />);
}

export default Component;
