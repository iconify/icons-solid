import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifo9zfbnz.css';
import '../../css/z/zhoth9btb.css';
import '../../css/p/p5qfpwqcv.css';
import '../../css/z/ztaoll0si.css';
import '../../css/p/py_-t3bmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifo9zfbnz"/><path class="zhoth9btb"/><path class="p5qfpwqcv"/><path class="ztaoll0si"/><path clip-rule="evenodd" class="py_-t3bmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:translation-outline"} {...others} />);
}

export default Component;
