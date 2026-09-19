import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhr8tubfj.css';
import '../../css/h/hkbtkxbgz.css';
import '../../css/y/y4c48zyhq.css';
import '../../css/k/k131-zb1l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hhr8tubfj"/><path class="hkbtkxbgz"/><path class="y4c48zyhq"/><path class="k131-zb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:folded-hands"} {...others} />);
}

export default Component;
