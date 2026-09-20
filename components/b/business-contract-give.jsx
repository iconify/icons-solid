import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utr-v2bic.css';
import '../../css/u/u2l958b8h.css';
import '../../css/l/l51psjrjd.css';
import '../../css/y/yc788y22u.css';
import '../../css/v/ve0fngb9k.css';
import '../../css/t/t3-fkrbjc.css';
import '../../css/g/g94fjik6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="utr-v2bic"/><path class="u2l958b8h"/><path class="l51psjrjd"/><path class="yc788y22u"/><path class="ve0fngb9k"/><path class="t3-fkrbjc"/><path class="g94fjik6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:business-contract-give"} {...others} />);
}

export default Component;
