import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/o/o13ity-9p.css';
import '../../css/t/tme5ik4hr.css';
import '../../css/n/n89ybzzhv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="o13ity-9p"/><path clip-rule="evenodd" class="tme5ik4hr"/><path class="n89ybzzhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:adobe-photoshop"} {...others} />);
}

export default Component;
