import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypu5ngbio.css';
import '../../css/i/i2t1upb9f.css';
import '../../css/w/wazoh8bmu.css';
import '../../css/z/zj07nkhgf.css';
import '../../css/p/p55k-ub0l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ypu5ngbio"/><path class="i2t1upb9f"/><path class="wazoh8bmu"/><path class="zj07nkhgf"/><path class="p55k-ub0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:nutandbolt"} {...others} />);
}

export default Component;
