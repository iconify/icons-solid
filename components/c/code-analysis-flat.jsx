import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9wex4b8f.css';
import '../../css/i/itd13quck.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="e9wex4b8f"/><path clip-rule="evenodd" class="itd13quck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:code-analysis-flat"} {...others} />);
}

export default Component;
