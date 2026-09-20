import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vcir9ebrj.css';
import '../../css/j/ju4d0lblh.css';
import '../../css/c/civfl11di.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="vcir9ebrj"/><path class="ju4d0lblh"/><path class="civfl11di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:gold-medal"} {...others} />);
}

export default Component;
