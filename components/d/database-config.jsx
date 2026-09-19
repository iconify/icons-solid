import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lcee_744z.css';
import '../../css/e/ezjk6mb0l.css';
import '../../css/o/o8c9i6byv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="lcee_744z"/><path class="ezjk6mb0l"/><path class="o8c9i6byv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:database-config"} {...others} />);
}

export default Component;
