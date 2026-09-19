import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lcbshzy3n.css';
import '../../css/c/cbmtmdb0g.css';
import '../../css/a/ah1lx8iif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="lcbshzy3n"/><path class="cbmtmdb0g"/><path class="ah1lx8iif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-open-01"} {...others} />);
}

export default Component;
