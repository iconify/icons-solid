import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qdph-wbnb.css';
import '../../css/x/x2yph1b-c.css';
import '../../css/b/bq6hqdbxj.css';
import '../../css/h/ho6046hnb.css';
import '../../css/b/bujohac1h.css';
import '../../css/a/a6rgdo_nj.css';
import '../../css/h/hx0ecabev.css';
import '../../css/q/qlmufcchk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qdph-wbnb"/><path class="wm-a x2yph1b-c"/><path class="bq6hqdbxj"/><path class="ho6046hnb wm-a"/><path class="bujohac1h"/><path class="a6rgdo_nj wm-a"/><path class="hx0ecabev"/><path class="qlmufcchk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:component-duo"} {...others} />);
}

export default Component;
