import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z8qchacao.css';
import '../../css/e/egr27nbzr.css';
import '../../css/x/x1_r36phd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco z8qchacao"/><path class="egr27nbzr wm-k"/><path class="wm-a x1_r36phd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:test-tube-blueprint"} {...others} />);
}

export default Component;
