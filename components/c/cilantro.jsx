import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffqf-bcny.css';
import '../../css/h/hfvyt7wet.css';
import '../../css/r/ro5dzvm8q.css';
import '../../css/m/mtqez028s.css';
import '../../css/z/zb8vxet2v.css';
import '../../css/k/kkrxhhbnt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ffqf-bcny"/><path class="hfvyt7wet"/><path class="ro5dzvm8q"/><path class="mtqez028s"/><path class="zb8vxet2v"/><path class="kkrxhhbnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:cilantro"} {...others} />);
}

export default Component;
