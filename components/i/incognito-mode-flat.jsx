import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/royzg162i.css';
import '../../css/i/ildplmb8t.css';
import '../../css/j/jpg5wdkmr.css';
import '../../css/e/e5h1cdn6z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="royzg162i"/><path class="ildplmb8t"/><path clip-rule="evenodd" class="jpg5wdkmr"/><path class="e5h1cdn6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:incognito-mode-flat"} {...others} />);
}

export default Component;
