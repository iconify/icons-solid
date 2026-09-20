import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6zqplbra.css';
import '../../css/u/u7sx8jcdh.css';
import '../../css/p/pwuaibcsf.css';
import '../../css/c/ct80qdbov.css';
import '../../css/s/sgo8mbbsa.css';
import '../../css/n/nrsss1blh.css';
import '../../css/m/m0xyvmiqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p6zqplbra"/><path class="u7sx8jcdh"/><path class="pwuaibcsf"/><path class="ct80qdbov"/><path class="sgo8mbbsa"/><path class="nrsss1blh"/><path class="m0xyvmiqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:headphones-1"} {...others} />);
}

export default Component;
