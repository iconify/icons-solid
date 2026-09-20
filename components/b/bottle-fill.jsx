import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lqm6vl25b.css';
import '../../css/u/ut5ih9blb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lqm6vl25b"/><path class="ut5ih9blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bottle-fill"} {...others} />);
}

export default Component;
