import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/q/q6wu4bc0t.css';
import '../../css/r/r5knwvbfg.css';
import '../../css/g/ga2yrzb2l.css';
import '../../css/e/eefrnxbyo.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGDnrO1b2A"><g class="ukm9jj2re"><path class="q6wu4bc0t"/><path class="r5knwvbfg"/><rect class="ga2yrzb2l"/><path class="eefrnxbyo"/></g></mask></defs><path mask="url(#SVGDnrO1b2A)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:date-range-duotone-line"} {...others} />);
}

export default Component;
