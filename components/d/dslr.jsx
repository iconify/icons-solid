import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uz7hc13zd.css';
import '../../css/n/nc_7k1bfr.css';
import '../../css/l/lx8143b6z.css';
import '../../css/s/s5etl5b8s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="uz7hc13zd"/><path class="nc_7k1bfr"/><path class="lx8143b6z"/><path class="s5etl5b8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dslr"} {...others} />);
}

export default Component;
