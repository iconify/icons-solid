import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/enyh8rb_h.css';
import '../../css/j/j81_8cdpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="enyh8rb_h"/><circle class="j81_8cdpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:robot-arm"} {...others} />);
}

export default Component;
