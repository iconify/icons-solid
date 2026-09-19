import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/r/r_ps6rbbp.css';
import '../../css/o/o2q9den1f.css';
import '../../css/o/ow9ewsbhy.css';
import '../../css/e/eyxcopbru.css';
import '../../css/m/m4xqr2b8i.css';
import '../../css/z/zljq9m7hi.css';
import '../../css/y/yxq4d62qh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="r_ps6rbbp"/><rect class="o2q9den1f"/><rect class="ow9ewsbhy"/><path class="eyxcopbru"/><path class="m4xqr2b8i"/><path class="zljq9m7hi"/><path class="yxq4d62qh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:perfumer-bottle"} {...others} />);
}

export default Component;
