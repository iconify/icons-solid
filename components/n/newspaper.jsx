import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/byu9v7b8j.css';
import '../../css/e/eo0e0-b9j.css';
import '../../css/w/wm6r4cb6c.css';
import '../../css/z/zg13sub9l.css';
import '../../css/u/uf81-e-rp.css';
import '../../css/r/r2najh0ci.css';
import '../../css/o/o02vosbpl.css';
import '../../css/r/rqfzlcblu.css';
import '../../css/v/vkf4zdxwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="byu9v7b8j wm-shadow"/><path class="eo0e0-b9j wm-shadow"/><path class="wm6r4cb6c"/><path class="zg13sub9l"/><path class="uf81-e-rp"/><path class="r2najh0ci"/><path class="o02vosbpl"/><path class="rqfzlcblu"/><path class="vkf4zdxwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:newspaper"} {...others} />);
}

export default Component;
