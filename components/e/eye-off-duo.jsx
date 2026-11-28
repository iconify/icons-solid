import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab-gq9bkn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q-nep3d5v.css';
import '../../css/v/vz-zaig0w.css';
import '../../css/e/eo_76b8fd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ab-gq9bkn secondary"/><g class="dt0cm9dhy primary"><path class="q-nep3d5v"/><path class="vz-zaig0w"/><path class="eo_76b8fd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:eye-off-duo"} {...others} />);
}

export default Component;
