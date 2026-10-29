import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_kq9bb7t.css';
import '../../css/p/p1fj12bxp.css';
import '../../css/b/bc4dd9bab.css';
import '../../css/e/epvascc3r.css';
import '../../css/h/h91i_yizt.css';
import '../../css/j/j6o1tzbzk.css';
import '../../css/g/gr8cppbqc.css';
import '../../css/i/izqvy2zym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_kq9bb7t wm-shadow"/><path class="p1fj12bxp wm-k"/><path class="bc4dd9bab wm-k"/><path class="epvascc3r wm-k"/><path class="h91i_yizt wm-k"/><path class="j6o1tzbzk wm-shine"/><path class="gr8cppbqc wm-k"/><path class="izqvy2zym wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:octagon-x"} {...others} />);
}

export default Component;
