import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mhzvzly2m.css';
import '../../css/d/dp8g2dbaz.css';
import '../../css/e/ez1e7bojf.css';
import '../../css/o/os_pxozit.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mhzvzly2m"/><path class="dp8g2dbaz"/><path class="ez1e7bojf"/><path class="os_pxozit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:sun"} {...others} />);
}

export default Component;
