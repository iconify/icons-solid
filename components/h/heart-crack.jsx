import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5xq4cf9p.css';
import '../../css/p/plq0rbb7g.css';
import '../../css/u/uubbj80-o.css';
import '../../css/i/ia4vc0b4h.css';
import '../../css/c/chrxlfb9r.css';
import '../../css/k/ku53p5u7g.css';
import '../../css/e/etfdwyb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f5xq4cf9p wm-k"/><path class="plq0rbb7g wm-k"/><path class="uubbj80-o wm-k"/><path class="ia4vc0b4h wm-shine"/><path class="chrxlfb9r wm-a"/><path class="ku53p5u7g wm-a"/><path class="etfdwyb7b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:heart-crack"} {...others} />);
}

export default Component;
