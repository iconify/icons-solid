import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hwlk3pbrh.css';
import '../../css/g/g6fxmdb0b.css';
import '../../css/p/pycmv8b_a.css';
import '../../css/e/e62u-yb0o.css';
import '../../css/i/i2gpzgxmr.css';
import '../../css/o/ovm2mub6e.css';
import '../../css/y/y9l7uyb7n.css';
import '../../css/s/szrkkkb6h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZcdgodjp"><g class="aql7dnt-u"><path class="hwlk3pbrh"/><path class="g6fxmdb0b"/><path class="pycmv8b_a"/><path class="e62u-yb0o"/><path class="i2gpzgxmr"/><path class="ovm2mub6e"/><path class="y9l7uyb7n"/><path class="szrkkkb6h"/></g></mask></defs><path mask="url(#SVGZcdgodjp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:four-round-point-connection"} {...others} />);
}

export default Component;
