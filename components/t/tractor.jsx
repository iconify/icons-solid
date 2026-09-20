import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4gzjpv2n.css';
import '../../css/s/sask4kb6v.css';
import '../../css/r/rzu9emb_e.css';
import '../../css/r/r8nv-ws7r.css';
import '../../css/y/y3-_u2bkt.css';
import '../../css/a/aweh-2ben.css';
import '../../css/k/kwgtqgbgg.css';
import '../../css/g/g6nmzzemg.css';
import '../../css/c/ckkn-acmq.css';
import '../../css/k/kn1hzjbkb.css';
import '../../css/k/kb7g-1efr.css';
import '../../css/v/v9wz6jyzs.css';
import '../../css/c/c3x1ib2wr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b4gzjpv2n"/><path class="sask4kb6v"/><path class="rzu9emb_e"/><path class="r8nv-ws7r"/><circle class="y3-_u2bkt"/><circle class="aweh-2ben"/><path class="kwgtqgbgg"/><path class="g6nmzzemg"/><path class="ckkn-acmq"/><path class="kn1hzjbkb"/><path class="kb7g-1efr"/><path class="v9wz6jyzs"/><path class="c3x1ib2wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tractor"} {...others} />);
}

export default Component;
