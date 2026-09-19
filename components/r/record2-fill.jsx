import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/js8uj5b5b.css';
import '../../css/e/efx57ib5y.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="js8uj5b5b"/><path class="efx57ib5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:record2-fill"} {...others} />);
}

export default Component;
