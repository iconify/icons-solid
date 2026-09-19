import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j6o7377jw.css';
import '../../css/z/zilprabad.css';
import '../../css/g/gujnf0u8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j6o7377jw"/><path class="zilprabad"/><path class="gujnf0u8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:drag-hand-gesture"} {...others} />);
}

export default Component;
