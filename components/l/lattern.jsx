import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/z8ianvbdo.css';
import '../../css/k/ku-fiwebi.css';
import '../../css/l/l6bnkfb9u.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="z8ianvbdo"/><path class="ku-fiwebi"/><path class="l6bnkfb9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:lattern"} {...others} />);
}

export default Component;
