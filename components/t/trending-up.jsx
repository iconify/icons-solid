import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/v9sren2xa.css';
import '../../css/e/evaws0b8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="v9sren2xa"/><path class="evaws0b8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:trending-up"} {...others} />);
}

export default Component;
