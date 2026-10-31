import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e8mb1rodb.css';
import '../../css/k/kkh1qgbpq.css';
import '../../css/w/wv9-mub2o.css';
import '../../css/k/k9sixyvpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e8mb1rodb wm-shadow"/><path class="kkh1qgbpq"/><path class="wv9-mub2o"/><path class="k9sixyvpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:battery"} {...others} />);
}

export default Component;
