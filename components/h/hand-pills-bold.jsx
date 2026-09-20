import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kb52udbpq.css';
import '../../css/v/vnvma0bxu.css';
import '../../css/f/f7vt13bol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kb52udbpq"/><path class="vnvma0bxu"/><path class="f7vt13bol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-pills-bold"} {...others} />);
}

export default Component;
