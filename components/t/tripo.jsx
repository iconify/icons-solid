import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a-4y-gb4g.css';
import '../../css/d/d-5phzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a-4y-gb4g"/><path class="d-5phzbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tripo"} {...others} />);
}

export default Component;
