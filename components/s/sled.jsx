import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6h5wnb1n.css';
import '../../css/f/fwg9mrx_e.css';
import '../../css/e/e2pqhtwyu.css';
import '../../css/r/r59myb4uv.css';
import '../../css/o/o8aie2byn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="k6h5wnb1n"/><path class="fwg9mrx_e"/><path class="e2pqhtwyu"/><path class="r59myb4uv"/><path class="o8aie2byn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sled"} {...others} />);
}

export default Component;
