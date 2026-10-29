import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k459aspxu.css';
import '../../css/t/t218te2ox.css';
import '../../css/s/s3z6ojk_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="k459aspxu wm-deco"/><path class="t218te2ox wm-deco"/><path class="s3z6ojk_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ring-box-blueprint"} {...others} />);
}

export default Component;
