import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/yeo4tvbtv.css';
import '../../css/a/ag8htpbhv.css';
import '../../css/j/jnko8r0hc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMa86wdcE"><g class="s9cl3zbei"><path class="yeo4tvbtv"/><circle class="ag8htpbhv"/><path class="jnko8r0hc"/></g></mask></defs><path mask="url(#SVGMa86wdcE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:watch-one"} {...others} />);
}

export default Component;
