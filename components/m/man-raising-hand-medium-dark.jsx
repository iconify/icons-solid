import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jee40abmf.css';
import '../../css/v/vejsyb0rz.css';
import '../../css/d/dz5tlmb3u.css';
import '../../css/k/kiqflslxa.css';
import '../../css/j/jg3ksmbdy.css';
import '../../css/u/u6oe9ob4o.css';
import '../../css/t/t3bjnzlli.css';
import '../../css/q/q4g5w-b4a.css';
import '../../css/g/gnm_6obnb.css';
import '../../css/g/gmj7hvb6l.css';
import '../../css/v/vvhk6b0xr.css';
import '../../css/b/b8vxv9obt.css';
import '../../css/c/cqiv7tbyh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jee40abmf"/><path class="vejsyb0rz"/><path class="dz5tlmb3u"/><path class="kiqflslxa"/><path class="jg3ksmbdy"/><path class="u6oe9ob4o"/><path class="t3bjnzlli"/><path class="q4g5w-b4a"/><path class="gnm_6obnb"/><path class="gmj7hvb6l"/><path class="vvhk6b0xr"/><path class="b8vxv9obt"/><path class="cqiv7tbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-raising-hand-medium-dark"} {...others} />);
}

export default Component;
