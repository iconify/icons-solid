import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pcyfrjbuz.css';
import '../../css/p/poeibnbcs.css';
import '../../css/a/a2caqccpk.css';
import '../../css/q/qg8wpjbhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pcyfrjbuz"/><path class="poeibnbcs"/><path clip-rule="evenodd" class="a2caqccpk"/><path class="qg8wpjbhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:users"} {...others} />);
}

export default Component;
