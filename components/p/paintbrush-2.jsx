import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/temxgktfz.css';
import '../../css/l/lp9ck2b9a.css';
import '../../css/b/bv45nla0i.css';
import '../../css/e/ei-mh9a5r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="temxgktfz"/><path class="lp9ck2b9a"/><path class="bv45nla0i"/><path class="ei-mh9a5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:paintbrush-2"} {...others} />);
}

export default Component;
