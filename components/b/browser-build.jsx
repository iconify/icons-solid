import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/uc6z-9b_l.css';
import '../../css/e/etknfunhc.css';
import '../../css/i/ifvqnmboq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="uc6z-9b_l"/><path class="etknfunhc"/><path class="ifvqnmboq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:browser-build"} {...others} />);
}

export default Component;
