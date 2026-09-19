import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/e/e5i876b3q.css';
import '../../css/q/qst3jj07t.css';
import '../../css/c/c5_4__biv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="e5i876b3q"/><path class="qst3jj07t"/><path class="c5_4__biv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:horizontal-spacing-between-items"} {...others} />);
}

export default Component;
