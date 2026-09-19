import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/d/dlyjf2byr.css';
import '../../css/l/l27fkrb0m.css';
import '../../css/x/xul25ckju.css';
import '../../css/t/tk-pr4bjm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="dlyjf2byr"/><path class="l27fkrb0m"/><path class="xul25ckju"/><path class="tk-pr4bjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chafing-dish"} {...others} />);
}

export default Component;
