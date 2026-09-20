import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hm_59sbho.css';
import '../../css/x/x1ct8yiis.css';
import '../../css/x/xcz9gzhia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hm_59sbho"/><path class="x1ct8yiis"/><path class="xcz9gzhia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:glama"} {...others} />);
}

export default Component;
