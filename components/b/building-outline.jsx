import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbfmji0-x.css';
import '../../css/t/ttexwac3y.css';
import '../../css/e/efdc1gb8g.css';
import '../../css/b/bp87d8bgl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="cbfmji0-x"/><path clip-rule="evenodd" class="ttexwac3y"/><path class="efdc1gb8g"/><path clip-rule="evenodd" class="bp87d8bgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-outline"} {...others} />);
}

export default Component;
