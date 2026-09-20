import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i0ds-c_by.css';
import '../../css/b/b9b28b8ye.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="i0ds-c_by"/><path class="b9b28b8ye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:video"} {...others} />);
}

export default Component;
