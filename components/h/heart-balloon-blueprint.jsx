import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iu5-nqrjt.css';
import '../../css/q/qfgq5qokv.css';
import '../../css/b/bj2yvbcgu.css';
import '../../css/o/o-_j7kzbc.css';
import '../../css/o/ols_87btu.css';
import '../../css/y/y94_vm6tw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="iu5-nqrjt wm-deco"/><path class="qfgq5qokv wm-deco"/><path class="bj2yvbcgu wm-deco"/><path class="o-_j7kzbc wm-k"/><path class="ols_87btu wm-a"/><path class="wm-k y94_vm6tw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-balloon-blueprint"} {...others} />);
}

export default Component;
