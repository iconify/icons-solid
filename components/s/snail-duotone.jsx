import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eo8wwipux.css';
import '../../css/b/bh7lyr5jh.css';
import '../../css/c/chfecmsdz.css';
import '../../css/u/ucrz1e4-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eo8wwipux"/><path class="bh7lyr5jh"/><path class="chfecmsdz"/><path class="ucrz1e4-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:snail-duotone"} {...others} />);
}

export default Component;
