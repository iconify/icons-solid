import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v71jupb4f.css';
import '../../css/l/lfeo2hbff.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="v71jupb4f"/><path class="lfeo2hbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:newspaper"} {...others} />);
}

export default Component;
