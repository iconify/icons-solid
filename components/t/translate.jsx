import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/lwvnupu0w.css';
import '../../css/s/sz4y6bb3f.css';
import '../../css/z/zmpl4x5yw.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="lwvnupu0w"/><path class="sz4y6bb3f"/><path class="zmpl4x5yw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:translate"} {...others} />);
}

export default Component;
