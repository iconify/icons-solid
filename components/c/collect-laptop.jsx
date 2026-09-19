import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/qp4gerb0r.css';
import '../../css/u/ue0lmc99t.css';
import '../../css/b/bbnvrh6uj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="qp4gerb0r"/><path class="ue0lmc99t"/><path class="bbnvrh6uj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:collect-laptop"} {...others} />);
}

export default Component;
