import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to7q2vb8o.css';
import '../../css/k/kejrebcjd.css';
import '../../css/w/wjz0tlrll.css';
import '../../css/f/fgi6hsbem.css';
import '../../css/i/i4fgx1bnc.css';
import '../../css/a/a0saxwtve.css';
import '../../css/l/l400q4wko.css';
import '../../css/l/ldnn4kdcx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="to7q2vb8o wm-shadow"/><path class="kejrebcjd wm-k"/><path class="wjz0tlrll wm-k"/><path class="fgi6hsbem wm-k"/><path class="i4fgx1bnc wm-k"/><path class="a0saxwtve wm-k"/><path class="l400q4wko wm-shine"/><path class="ldnn4kdcx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:square-terminal"} {...others} />);
}

export default Component;
