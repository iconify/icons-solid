import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z-t-_1f3e.css';
import '../../css/c/cozihebyq.css';
import '../../css/b/b47y3lb-o.css';
import '../../css/x/x_s2wld9f.css';
import '../../css/o/osjn3yetn.css';
import '../../css/k/kx3zikbiq.css';
import '../../css/e/e41rjhban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z-t-_1f3e"/><path class="cozihebyq"/><path class="b47y3lb-o"/><path class="x_s2wld9f"/><path class="osjn3yetn"/><path class="kx3zikbiq"/><path class="e41rjhban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-woman-braids"} {...others} />);
}

export default Component;
