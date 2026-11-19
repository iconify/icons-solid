import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2wu_ib-c.css';
import '../../css/f/fd2upbc2w.css';
import '../../css/e/eumawzbwv.css';
import '../../css/c/chn_79bzy.css';
import '../../css/p/pi0q-0b7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z2wu_ib-c"/><path class="fd2upbc2w"/><path class="eumawzbwv"/><path clip-rule="evenodd" class="chn_79bzy"/><path class="pi0q-0b7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:car-bump"} {...others} />);
}

export default Component;
