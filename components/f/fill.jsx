import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/f/fq3nujn8r.css';
import '../../css/e/e2cjwuaai.css';
import '../../css/p/powp1tb5e.css';
import '../../css/c/chdsjjbjt.css';
import '../../css/k/khzbbow-c.css';
import '../../css/t/tdtcsc89s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="xhdah4bbl"/><rect class="fq3nujn8r"/><path class="e2cjwuaai"/><path class="powp1tb5e"/><path class="chdsjjbjt"/><path class="khzbbow-c"/><path class="tdtcsc89s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fill"} {...others} />);
}

export default Component;
