import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r4jh8i2nw.css';
import '../../css/r/rlx7job7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r4jh8i2nw"/><path class="rlx7job7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:shower"} {...others} />);
}

export default Component;
