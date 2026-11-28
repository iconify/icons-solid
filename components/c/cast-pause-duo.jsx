import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlbxmdb4d.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yat5egb_l.css';
import '../../css/z/zihikobha.css';
import '../../css/a/a3pcmmbzg.css';
import '../../css/d/dgbjpe3qo.css';
import '../../css/h/hm-l53kuj.css';
import '../../css/t/tkcl2ccrv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nlbxmdb4d secondary"/><g class="dt0cm9dhy primary"><path class="yat5egb_l"/><path class="zihikobha"/><path class="a3pcmmbzg"/><path class="dgbjpe3qo"/><path class="hm-l53kuj"/><path class="tkcl2ccrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cast-pause-duo"} {...others} />);
}

export default Component;
