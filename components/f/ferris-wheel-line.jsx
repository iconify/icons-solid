import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v90gbqbox.css';
import '../../css/n/npzbi206w.css';
import '../../css/v/voif_5bdv.css';
import '../../css/h/hl51kmiih.css';
import '../../css/p/p12ebw2el.css';
import '../../css/h/h6zst5bek.css';
import '../../css/u/u8zxqedgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="v90gbqbox"/><circle class="npzbi206w"/><circle class="voif_5bdv"/><circle class="hl51kmiih"/><circle class="p12ebw2el"/><circle class="h6zst5bek"/><path class="u8zxqedgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:ferris-wheel-line"} {...others} />);
}

export default Component;
