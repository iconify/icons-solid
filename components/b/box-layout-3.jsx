import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/w/w_kllgnne.css';
import '../../css/b/be_-fqztx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="pr52f_b5y"><path class="w_kllgnne"/><path class="be_-fqztx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-layout-3"} {...others} />);
}

export default Component;
