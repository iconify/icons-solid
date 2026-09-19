import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/at0g76b4p.css';
import '../../css/t/tngi6xwzf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="at0g76b4p"/><path class="tngi6xwzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vagina-alt-outline"} {...others} />);
}

export default Component;
