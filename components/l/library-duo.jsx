import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zvz0edcja.css';
import '../../css/y/yl2xlpu3j.css';
import '../../css/e/ehzbz6swd.css';
import '../../css/a/akg9lrhti.css';
import '../../css/r/rmroh8bfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zvz0edcja"/><path class="yl2xlpu3j"/><path class="ehzbz6swd"/><path class="akg9lrhti"/><path class="rmroh8bfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:library-duo"} {...others} />);
}

export default Component;
