import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/imqcuvbom.css';
import '../../css/p/phuno9t-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="imqcuvbom"/><path clip-rule="evenodd" class="phuno9t-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:fill-color"} {...others} />);
}

export default Component;
