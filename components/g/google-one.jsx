import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rrm42c80t.css';
import '../../css/j/j49-2cbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rrm42c80t"/><path class="j49-2cbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:google-one"} {...others} />);
}

export default Component;
