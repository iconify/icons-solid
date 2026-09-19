import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4tqe28pg.css';
import '../../css/k/kc0qv_oyk.css';
import '../../css/a/a_j4mhb6r.css';
import '../../css/z/zajbrwbwc.css';
import '../../css/r/rj5ktqdxj.css';
import '../../css/a/a4jjsab0w.css';
import '../../css/u/u-gzl_v4x.css';
import '../../css/z/zpd-4fomt.css';
import '../../css/e/ewodnhtsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4tqe28pg"/><path class="kc0qv_oyk"/><path class="a_j4mhb6r"/><circle class="zajbrwbwc"/><path class="rj5ktqdxj"/><circle class="a4jjsab0w"/><circle class="u-gzl_v4x"/><path class="zpd-4fomt"/><circle class="ewodnhtsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:counting"} {...others} />);
}

export default Component;
