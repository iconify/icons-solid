import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/o/okm2k4dpt.css';
import '../../css/e/ef5juj20y.css';
import '../../css/s/sl65mob2c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="okm2k4dpt"/><path class="ef5juj20y"/><path clip-rule="evenodd" class="sl65mob2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:adobe-indesign"} {...others} />);
}

export default Component;
