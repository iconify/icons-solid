import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x8h-3achn.css';
import '../../css/d/dd0q7x9uq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x8h-3achn"/><path class="dd0q7x9uq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:git-branch"} {...others} />);
}

export default Component;
