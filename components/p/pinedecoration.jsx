import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3246g20x.css';
import '../../css/o/o--w3vb9a.css';
import '../../css/y/y69jcmbvo.css';
import '../../css/c/car98v12i.css';
import '../../css/n/nfu345b5z.css';
import '../../css/r/rppb0ttou.css';
import '../../css/u/uyo12fb0l.css';
import '../../css/r/r8wxgyyqs.css';
import '../../css/g/g8wjy75ek.css';
import '../../css/w/wfkgz_b6p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t3246g20x"/><path class="o--w3vb9a"/><path class="y69jcmbvo"/><path class="car98v12i"/><path class="nfu345b5z"/><path class="rppb0ttou"/><path class="uyo12fb0l"/><path class="r8wxgyyqs"/><path class="g8wjy75ek"/><path class="wfkgz_b6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pinedecoration"} {...others} />);
}

export default Component;
