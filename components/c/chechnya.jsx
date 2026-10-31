import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksnmb0v6t.css';
import '../../css/y/ytckw3b9r.css';
import '../../css/l/lxia6g_nu.css';
import '../../css/o/ol-1x80it.css';
import '../../css/c/c8g8wzbbt.css';
import '../../css/q/q83zliwtp.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ksnmb0v6t"/><path class="ytckw3b9r"/><path class="lxia6g_nu"/><path class="ol-1x80it"/><path class="c8g8wzbbt"/><path class="q83zliwtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:chechnya"} {...others} />);
}

export default Component;
