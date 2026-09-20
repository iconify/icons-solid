import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fwp3xkm7q.css';
import '../../css/x/x251s65rp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fwp3xkm7q"/><path class="x251s65rp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:presentation-projector-screen-budget-analytics"} {...others} />);
}

export default Component;
