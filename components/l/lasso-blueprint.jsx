import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zfwpqnb7m.css';
import '../../css/s/s45x-eokh.css';
import '../../css/t/t218te2ox.css';
import '../../css/k/k56gh1yvu.css';
import '../../css/g/gxjs16b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zfwpqnb7m"/><path class="s45x-eokh wm-deco"/><path class="t218te2ox wm-deco"/><path class="k56gh1yvu wm-k"/><path class="gxjs16b5s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lasso-blueprint"} {...others} />);
}

export default Component;
