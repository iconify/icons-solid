import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/lqbe0_bqt.css';
import '../../css/t/t6on5ebga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="lqbe0_bqt"/><path class="t6on5ebga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:star-2"} {...others} />);
}

export default Component;
