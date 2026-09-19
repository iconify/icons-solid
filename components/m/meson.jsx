import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulra56alq.css';
import '../../css/a/af1aaacyg.css';
import '../../css/g/gah4mqlpm.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ulra56alq"><path class="af1aaacyg"/><path class="gah4mqlpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:meson"} {...others} />);
}

export default Component;
