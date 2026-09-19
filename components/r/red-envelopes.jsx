import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/c4eeuxbpr.css';
import '../../css/g/g2owpxb-t.css';
import '../../css/l/lmfq34bbb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="c4eeuxbpr"/><path class="g2owpxb-t"/><path class="lmfq34bbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:red-envelopes"} {...others} />);
}

export default Component;
