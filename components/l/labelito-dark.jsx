import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvp3tpbju.css';
import '../../css/s/sa794qgvp.css';
import '../../css/z/zxq1r2bws.css';
import '../../css/q/qdr1inb1m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mvp3tpbju"/><path class="sa794qgvp"/><path class="zxq1r2bws"/><path class="qdr1inb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:labelito-dark"} {...others} />);
}

export default Component;
