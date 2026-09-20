import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-laemb0h.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q6p0h2rje.css';
import '../../css/h/hjlxz_puh.css';
import '../../css/n/ny37ipbgx.css';
import '../../css/c/c-zrgpb5l.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGFa7GcbtP" class="u-laemb0h"/></defs><g class="ft5dv1b6b"><path class="q6p0h2rje"/><path class="hjlxz_puh"/><path class="ny37ipbgx"/><use href="#SVGFa7GcbtP" class="c-zrgpb5l"/><use href="#SVGFa7GcbtP" class="c-zrgpb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:crypto-currency-bitcoin-circle"} {...others} />);
}

export default Component;
