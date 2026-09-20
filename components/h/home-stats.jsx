import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l6xmiu9yl.css';
import '../../css/b/b_dk99s4m.css';
import '../../css/s/ssw2-urzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l6xmiu9yl"/><path class="b_dk99s4m"/><path class="ssw2-urzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-stats"} {...others} />);
}

export default Component;
