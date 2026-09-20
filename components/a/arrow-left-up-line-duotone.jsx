import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6ar3parr.css';
import '../../css/b/bq84y5bti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l6ar3parr"/><path class="bq84y5bti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-up-line-duotone"} {...others} />);
}

export default Component;
