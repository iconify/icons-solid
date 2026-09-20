import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/inkt8qb9w.css';
import '../../css/a/aj1tj2bdr.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="inkt8qb9w"/><path class="aj1tj2bdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:podium"} {...others} />);
}

export default Component;
