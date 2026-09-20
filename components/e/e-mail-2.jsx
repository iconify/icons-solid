import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvblw5gwi.css';
import '../../css/w/wj96sv6ms.css';
import '../../css/g/gejl58oxp.css';
import '../../css/r/rq7q5qcrb.css';
import '../../css/q/q6boobc_y.css';
import '../../css/k/k1dgjdb1u.css';
import '../../css/x/x959o0t2f.css';
import '../../css/e/e8-5j13vt.css';
import '../../css/a/aqvllybye.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jvblw5gwi"/><path class="wj96sv6ms"/><path class="gejl58oxp"/><path class="rq7q5qcrb"/><path class="q6boobc_y"/><path class="k1dgjdb1u"/><path class="x959o0t2f"/><path class="e8-5j13vt"/><path class="aqvllybye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:e-mail-2"} {...others} />);
}

export default Component;
