import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gclruccxz.css';
import '../../css/c/cjn1qbxvz.css';
import '../../css/m/mk10qibjs.css';
import '../../css/l/lc5e75zoy.css';
import '../../css/w/w2hy3bjtm.css';
import '../../css/h/h3mbwmriq.css';
import '../../css/x/x4zqg1bmy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gclruccxz wm-shadow"/><path class="cjn1qbxvz"/><path class="mk10qibjs"/><path class="lc5e75zoy"/><path class="w2hy3bjtm"/><path class="h3mbwmriq wm-shine"/><path class="x4zqg1bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:cloud"} {...others} />);
}

export default Component;
