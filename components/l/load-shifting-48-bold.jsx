import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5paa4bib.css';
import '../../css/p/p3x5527zo.css';
import '../../css/d/dkwl10z_r.css';
import '../../css/o/o10w4gbhg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t5paa4bib"/><path class="p3x5527zo"/><path class="dkwl10z_r"/><path class="o10w4gbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-shifting-48-bold"} {...others} />);
}

export default Component;
