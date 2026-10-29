import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_7np-bhy.css';
import '../../css/d/dy_ge8baz.css';
import '../../css/j/jqznirbhj.css';
import '../../css/u/uzkul7bbm.css';
import '../../css/c/cj74xpb7n.css';
import '../../css/l/lyvqnqnpb.css';
import '../../css/w/wo1eac_fe.css';
import '../../css/w/wjrrk8gug.css';
import '../../css/k/k1d-dnten.css';
import '../../css/k/k325bltcn.css';
import '../../css/z/zj803rbkf.css';
import '../../css/g/gsb6s4w1e.css';
import '../../css/p/pt_2g0w8v.css';
import '../../css/x/xem2f12mh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_7np-bhy wm-shadow"/><path class="dy_ge8baz wm-k"/><path class="jqznirbhj wm-k"/><path class="uzkul7bbm wm-k"/><path class="cj74xpb7n wm-k"/><path class="lyvqnqnpb wm-k"/><path class="wm-shine wo1eac_fe"/><path class="wjrrk8gug wm-a"/><path class="k1d-dnten wm-s"/><path class="k325bltcn wm-s"/><path class="wm-s zj803rbkf"/><path class="gsb6s4w1e wm-s"/><path class="pt_2g0w8v wm-s"/><path class="wm-s xem2f12mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:file-clock"} {...others} />);
}

export default Component;
