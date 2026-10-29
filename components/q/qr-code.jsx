import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwhp0id5b.css';
import '../../css/h/hjavzd8po.css';
import '../../css/y/y8_2bvx1m.css';
import '../../css/l/lv85tpb9o.css';
import '../../css/j/jwkqm0bfn.css';
import '../../css/o/ormi2wbzv.css';
import '../../css/x/xl02p00sv.css';
import '../../css/o/o8aoqrbuk.css';
import '../../css/g/gcxm7n5nf.css';
import '../../css/v/v4mr0ehdx.css';
import '../../css/e/ed-fkfbtv.css';
import '../../css/v/vm6xcmv3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwhp0id5b wm-shadow"/><path class="hjavzd8po wm-k"/><path class="wm-k y8_2bvx1m"/><path class="lv85tpb9o wm-k"/><path class="jwkqm0bfn wm-k"/><path class="ormi2wbzv wm-shine"/><path class="wm-k xl02p00sv"/><path class="o8aoqrbuk wm-a"/><path class="gcxm7n5nf wm-a"/><path class="v4mr0ehdx wm-a"/><path class="ed-fkfbtv wm-a"/><path class="vm6xcmv3j wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:qr-code"} {...others} />);
}

export default Component;
