import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/m/mkmt5_hxa.css';
import '../../css/s/s5vxx3bbe.css';
import '../../css/e/evh9ru-va.css';
import '../../css/f/f3ghz8bgm.css';
import '../../css/x/xr7d5mlip.css';
import '../../css/p/ptm8frbfu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="mkmt5_hxa"/><path class="s5vxx3bbe"/><path class="evh9ru-va"/><path class="f3ghz8bgm"/><path class="xr7d5mlip"/><path class="ptm8frbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:steering-wheel"} {...others} />);
}

export default Component;
