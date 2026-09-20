import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc4e97bec.css';
import '../../css/g/gxh-hj5xb.css';
import '../../css/i/ii8dw6bwf.css';
import '../../css/o/ol8a15hiu.css';
import '../../css/a/a1-9v9buc.css';
import '../../css/w/w1mzljcin.css';
import '../../css/i/ith1obwyy.css';
import '../../css/l/lo_6p0bod.css';
import '../../css/i/idbcww0df.css';
import '../../css/r/rdwt5qboi.css';
import '../../css/u/ul0oryb2n.css';
import '../../css/n/nzfbk_bji.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zc4e97bec"/><path class="gxh-hj5xb"/><path class="ii8dw6bwf"/><path class="ol8a15hiu"/><path class="a1-9v9buc"/><path class="w1mzljcin"/><path class="ith1obwyy"/><path class="lo_6p0bod"/><path class="idbcww0df"/><path class="rdwt5qboi"/><path class="ul0oryb2n"/><path class="nzfbk_bji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:speedboat"} {...others} />);
}

export default Component;
