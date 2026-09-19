import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugaw_y7eu.css';
import '../../css/i/i4b55-z0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ugaw_y7eu"/><path class="i4b55-z0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:smart-phone-landscape"} {...others} />);
}

export default Component;
