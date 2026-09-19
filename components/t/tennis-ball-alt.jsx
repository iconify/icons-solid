import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q8a9ihsad.css';
import '../../css/b/bixracnsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q8a9ihsad"/><path class="bixracnsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:tennis-ball-alt"} {...others} />);
}

export default Component;
