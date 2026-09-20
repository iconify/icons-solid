import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/kui0xebwu.css';
import '../../css/x/xlnhc8tfb.css';
import '../../css/r/rbuu6uban.css';
import '../../css/i/i3oypo-mg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="kui0xebwu"/><path class="xlnhc8tfb"/><path class="rbuu6uban"/><path class="i3oypo-mg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-science-spark"} {...others} />);
}

export default Component;
