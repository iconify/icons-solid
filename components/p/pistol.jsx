import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpub67bxx.css';
import '../../css/r/rlg8-yb_t.css';
import '../../css/b/bxsirqewh.css';
import '../../css/o/or0gllb-g.css';
import '../../css/t/tj83emb1c.css';
import '../../css/g/g_xof7bre.css';
import '../../css/o/o8smafbcl.css';
import '../../css/b/b-pvhabyq.css';
import '../../css/y/ym-uju76j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qpub67bxx"/><path class="rlg8-yb_t"/><path class="bxsirqewh"/><path class="or0gllb-g"/><path class="tj83emb1c"/><path class="g_xof7bre"/><path class="o8smafbcl"/><path class="b-pvhabyq"/><path class="ym-uju76j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pistol"} {...others} />);
}

export default Component;
