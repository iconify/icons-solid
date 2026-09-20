import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6iiwrbvd.css';
import '../../css/e/ey55h2r2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l6iiwrbvd"/><path class="ey55h2r2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:svelte"} {...others} />);
}

export default Component;
