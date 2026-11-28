import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2elbacld.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/puh695b-r.css';
import '../../css/g/gy6t8qprz.css';
import '../../css/e/eyw9bdcdh.css';
import '../../css/d/dmqs4bbjm.css';
import '../../css/v/v6fglctjz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m2elbacld secondary"/><g class="dt0cm9dhy primary"><path class="puh695b-r"/><path class="gy6t8qprz"/><path class="eyw9bdcdh"/><path class="dmqs4bbjm"/><path class="v6fglctjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:penguin-duo"} {...others} />);
}

export default Component;
