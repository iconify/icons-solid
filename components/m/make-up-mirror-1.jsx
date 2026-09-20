import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o7jzxy5_e.css';
import '../../css/x/x3_26c47h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o7jzxy5_e"/><path class="x3_26c47h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:make-up-mirror-1"} {...others} />);
}

export default Component;
