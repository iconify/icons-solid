import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1oqsibdl.css';
import '../../css/o/o-9x-bcna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i1oqsibdl"/><path class="o-9x-bcna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:fast-charging"} {...others} />);
}

export default Component;
