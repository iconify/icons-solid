import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t8x0_luog.css';
import '../../css/u/uaz_-2dat.css';
import '../../css/k/krhot4byv.css';
import '../../css/x/xu6e4gbpk.css';
import '../../css/q/q7qqxmltq.css';
import '../../css/j/jvdfgbdur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t8x0_luog"/><path class="uaz_-2dat"/><rect class="krhot4byv"/><path class="xu6e4gbpk"/><rect class="q7qqxmltq"/><path class="jvdfgbdur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:flippers"} {...others} />);
}

export default Component;
