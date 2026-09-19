import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/z/z6vsw_bbp.css';
import '../../css/x/x0vrx2mbt.css';
import '../../css/q/q9euir7pf.css';
import '../../css/u/umo0npbcb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="xhdah4bbl"/><path class="z6vsw_bbp"/><path class="x0vrx2mbt"/><path class="q9euir7pf"/><path class="umo0npbcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hashtag-key"} {...others} />);
}

export default Component;
