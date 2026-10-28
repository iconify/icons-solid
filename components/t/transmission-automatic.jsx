import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9sk63buc.css';
import '../../css/r/r1a2ovbtw.css';
import '../../css/a/acjtibznp.css';
import '../../css/j/jrdmm8b8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l9sk63buc"/><circle class="r1a2ovbtw"/><circle class="acjtibznp"/><path class="jrdmm8b8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:transmission-automatic"} {...others} />);
}

export default Component;
