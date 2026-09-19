import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/l/l-gdtgbaj.css';
import '../../css/j/j1iya_bct.css';
import '../../css/l/ltz8c0bzf.css';
import '../../css/i/ienynzehy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="l-gdtgbaj"/><path class="j1iya_bct"/><path class="ltz8c0bzf"/><path class="ienynzehy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:expand-right"} {...others} />);
}

export default Component;
