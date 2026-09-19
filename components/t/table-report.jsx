import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/s/ske6nabae.css';
import '../../css/j/ju3i7pbvh.css';
import '../../css/s/sd78_u7bn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWVB6RddW"><g class="ufeehvblu"><path class="ske6nabae"/><path class="ju3i7pbvh"/><path class="sd78_u7bn"/></g></mask></defs><path mask="url(#SVGWVB6RddW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:table-report"} {...others} />);
}

export default Component;
