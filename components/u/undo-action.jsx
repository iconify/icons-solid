import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hw0ngrb8i.css';
import '../../css/u/upye-e8ei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hw0ngrb8i"/><path class="upye-e8ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:undo-action"} {...others} />);
}

export default Component;
