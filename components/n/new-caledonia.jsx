import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p99hl5bjs.css';
import '../../css/b/bupogob7n.css';
import '../../css/s/s84xs2b2r.css';
import '../../css/c/cetdxtbjt.css';
import '../../css/i/if17zbneb.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="p99hl5bjs"/><path class="bupogob7n"/><path class="s84xs2b2r"/><path class="cetdxtbjt"/><path class="if17zbneb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:new-caledonia"} {...others} />);
}

export default Component;
