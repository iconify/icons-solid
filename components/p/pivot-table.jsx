import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/cxonl5tri.css';
import '../../css/n/nehau8bji.css';
import '../../css/j/jxbai5bpu.css';
import '../../css/u/u4a_g3-0s.css';
import '../../css/p/p060ftb5o.css';
import '../../css/v/vr6midtuq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGDf6oboo"><g class="s9cl3zbei"><path class="cxonl5tri"/><path class="nehau8bji"/><path class="jxbai5bpu"/><path class="u4a_g3-0s"/><path class="p060ftb5o"/><path class="vr6midtuq"/></g></mask></defs><path mask="url(#SVGGDf6oboo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pivot-table"} {...others} />);
}

export default Component;
