import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i2dbcnb3o.css';
import '../../css/c/cuc314b8j.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="i2dbcnb3o"/><path class="cuc314b8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:controller"} {...others} />);
}

export default Component;
