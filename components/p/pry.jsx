import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx8b_0f0j.css';
import '../../css/x/xhwjzrb2l.css';
import '../../css/m/mrv_iwbda.css';
import '../../css/u/u1puj1bvx.css';
import '../../css/j/j2eoanq6o.css';
import '../../css/e/eyfsvrbmd.css';
import '../../css/u/usg8z4b-u.css';
import '../../css/j/j-xl0r7cb.css';
import '../../css/o/ok2xwlb_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sx8b_0f0j"/><path class="xhwjzrb2l"/><path class="mrv_iwbda"/><path class="u1puj1bvx"/><path class="j2eoanq6o"/><path class="eyfsvrbmd"/><path class="usg8z4b-u"/><path class="j-xl0r7cb"/><path class="ok2xwlb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pry"} {...others} />);
}

export default Component;
