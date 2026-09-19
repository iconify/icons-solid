import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1qdm02pd.css';
import '../../css/o/o72kk2b-f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="a1qdm02pd"/><path class="o72kk2b-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:angry-face"} {...others} />);
}

export default Component;
