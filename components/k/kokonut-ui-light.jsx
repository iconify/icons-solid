import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qttsuk-3d.css';
import '../../css/r/r4okgti6i.css';
import '../../css/t/tpe0tsbmv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qttsuk-3d"/><path class="r4okgti6i"/><path class="tpe0tsbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kokonut-ui-light"} {...others} />);
}

export default Component;
