import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oasbuyb5l.css';
import '../../css/b/ba030bcts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oasbuyb5l"/><path class="ba030bcts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:undo"} {...others} />);
}

export default Component;
