import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e76u3_zod.css';
import '../../css/y/y88jp4b7b.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="e76u3_zod"/><path class="y88jp4b7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:cog"} {...others} />);
}

export default Component;
