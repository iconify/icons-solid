import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whblhc0yi.css';
import '../../css/s/sj3blwbkw.css';
import '../../css/y/yfgxcccib.css';
import '../../css/v/vea1m-ivd.css';
import '../../css/n/nthd2abya.css';
import '../../css/l/l2eut_bhb.css';
import '../../css/h/h5-ybjiiz.css';
import '../../css/w/w0iar8b9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="whblhc0yi wm-shadow"/><path class="sj3blwbkw wm-k"/><path class="wm-k yfgxcccib"/><path class="vea1m-ivd wm-k"/><path class="nthd2abya wm-k"/><path class="l2eut_bhb wm-k"/><path class="h5-ybjiiz wm-shine"/><path class="w0iar8b9y wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:volleyball"} {...others} />);
}

export default Component;
