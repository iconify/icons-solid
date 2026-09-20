import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exs5-kwtx.css';
import '../../css/x/x2iq-w9-x.css';
import '../../css/b/bgjc5lpxq.css';
import '../../css/z/zviy12b5b.css';
import '../../css/e/eh8xqmaoo.css';
import '../../css/o/o2gdlccha.css';
import '../../css/d/diy3xcc1a.css';
import '../../css/d/d14yexcbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="exs5-kwtx"/><path class="x2iq-w9-x"/><path class="bgjc5lpxq"/><path class="zviy12b5b"/><path class="eh8xqmaoo"/><path class="o2gdlccha"/><path class="diy3xcc1a"/><path class="d14yexcbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-female-heart"} {...others} />);
}

export default Component;
