import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gl8phobcm.css';
import '../../css/e/ec-yrwb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gl8phobcm"/><path class="ec-yrwb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ab-testing-monitors"} {...others} />);
}

export default Component;
