import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecsrbub4u.css';
import '../../css/z/zqkwlcc9e.css';
import '../../css/y/yhqgh8bpg.css';
import '../../css/k/k3jqu1vln.css';
import '../../css/k/ko-r-nbro.css';
import '../../css/x/xz75kjq5l.css';
import '../../css/o/owerads8g.css';
import '../../css/j/j_kppeg2r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ecsrbub4u"/><circle class="zqkwlcc9e"/><circle class="yhqgh8bpg"/><circle class="k3jqu1vln"/><circle class="ko-r-nbro"/><circle class="xz75kjq5l"/><circle class="owerads8g"/><circle class="j_kppeg2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:chart-scatter"} {...others} />);
}

export default Component;
