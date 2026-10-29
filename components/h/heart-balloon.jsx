import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2-7h6ylu.css';
import '../../css/m/mmehh-eal.css';
import '../../css/k/k2c8wbyaf.css';
import '../../css/g/gnbl70xwi.css';
import '../../css/c/c-9i1_zzy.css';
import '../../css/f/fx_z_471c.css';
import '../../css/m/mcwahnbso.css';
import '../../css/y/ymhkmsbac.css';
import '../../css/g/gc8iqqapt.css';
import '../../css/v/v8r9fub1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2-7h6ylu wm-shadow"/><path class="mmehh-eal wm-k"/><path class="k2c8wbyaf wm-k"/><path class="gnbl70xwi wm-k"/><path class="c-9i1_zzy wm-k"/><path class="fx_z_471c wm-k"/><path class="mcwahnbso wm-shine"/><path class="wm-a ymhkmsbac"/><path class="gc8iqqapt wm-a"/><path class="v8r9fub1o wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:heart-balloon"} {...others} />);
}

export default Component;
