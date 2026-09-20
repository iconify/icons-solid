import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tamwapboi.css';
import '../../css/a/asapdumbf.css';
import '../../css/j/jzsuphahd.css';
import '../../css/m/mrdphm98l.css';
import '../../css/k/kk3avwwfr.css';
import '../../css/u/uqhfroboy.css';
import '../../css/q/qe99vccll.css';
import '../../css/y/ygv5vog_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tamwapboi"/><path class="asapdumbf"/><path class="jzsuphahd"/><path class="mrdphm98l"/><path class="kk3avwwfr"/><path class="uqhfroboy"/><path class="qe99vccll"/><path class="ygv5vog_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-file-module-edit"} {...others} />);
}

export default Component;
