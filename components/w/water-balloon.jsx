import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-7t07b1v.css';
import '../../css/j/jlkyq8b9g.css';
import '../../css/b/bp0ygxb2u.css';
import '../../css/x/x29_axdux.css';
import '../../css/q/q8acaqvub.css';
import '../../css/f/fbiv5jbjo.css';
import '../../css/f/fe5rk1b-e.css';
import '../../css/o/o6d6k2bnj.css';
import '../../css/b/b5t2yebwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n-7t07b1v wm-k"/><path class="jlkyq8b9g wm-k"/><path class="bp0ygxb2u wm-k"/><path class="wm-shine x29_axdux"/><path class="q8acaqvub wm-k"/><path class="fbiv5jbjo wm-k"/><path class="fe5rk1b-e wm-k"/><path class="o6d6k2bnj wm-shine"/><path class="b5t2yebwh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:water-balloon"} {...others} />);
}

export default Component;
