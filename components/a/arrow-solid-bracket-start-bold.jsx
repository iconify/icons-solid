import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jpbfdi_1g.css';
import '../../css/x/xam5qux0f.css';
import '../../css/y/ye2-1wzko.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="jpbfdi_1g"/><path clip-rule="evenodd" class="xam5qux0f"/><path class="ye2-1wzko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-bracket-start-bold"} {...others} />);
}

export default Component;
