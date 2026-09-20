import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ty3hqsxbs.css';
import '../../css/g/go75i7e2x.css';
import '../../css/y/y2zl39b4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ty3hqsxbs"/><path class="go75i7e2x"/><path class="y2zl39b4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:loader-bold-duotone"} {...others} />);
}

export default Component;
