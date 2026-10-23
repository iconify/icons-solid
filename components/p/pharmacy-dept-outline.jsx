import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agaydb0uo.css';
import '../../css/y/ymvbqj2pd.css';
import '../../css/c/ctjobacav.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="agaydb0uo"/><path class="ymvbqj2pd"/><path clip-rule="evenodd" class="ctjobacav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pharmacy-dept-outline"} {...others} />);
}

export default Component;
