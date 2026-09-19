import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk2wcw7qb.css';
import '../../css/f/fjbimbr2q.css';
import '../../css/z/zwbi_6b7i.css';
import '../../css/b/bdnbdybre.css';
import '../../css/e/e-4bbt5lc.css';
import '../../css/k/klzkheb7b.css';
import '../../css/w/wr2unbwzr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qk2wcw7qb"/><path class="fjbimbr2q"/><path class="zwbi_6b7i"/><path class="bdnbdybre"/><path class="e-4bbt5lc"/><path class="klzkheb7b"/><path class="wr2unbwzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:anatomical-heart"} {...others} />);
}

export default Component;
