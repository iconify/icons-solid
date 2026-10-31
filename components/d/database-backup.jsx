import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/ybis5fb1d.css';
import '../../css/r/rn913dbor.css';
import '../../css/a/ay8cv7rvn.css';
import '../../css/d/dx8clgbog.css';
import '../../css/h/h2yet72fy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ybis5fb1d"/><path class="rn913dbor wm-shine"/><path class="ay8cv7rvn wm-k"/><path class="dx8clgbog wm-a"/><path class="h2yet72fy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:database-backup"} {...others} />);
}

export default Component;
