import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exr-mn5mf.css';
import '../../css/w/wtzj__boa.css';
import '../../css/o/oz8s-bbju.css';
import '../../css/p/peada08tm.css';
import '../../css/k/kyzehnb_r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="exr-mn5mf"/><path class="wtzj__boa"/><path class="oz8s-bbju"/><path class="peada08tm"/><path class="kyzehnb_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sailboat"} {...others} />);
}

export default Component;
