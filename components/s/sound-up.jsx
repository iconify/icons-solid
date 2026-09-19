import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/d/dcc4-vbsx.css';
import '../../css/i/i2qi74b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="dcc4-vbsx"/><path class="i2qi74b6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:sound-up"} {...others} />);
}

export default Component;
