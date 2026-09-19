import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/idf2-ab7i.css';
import '../../css/u/uok4w2qih.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="idf2-ab7i"/><path class="uok4w2qih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:diamond-necklace"} {...others} />);
}

export default Component;
