import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/svxyzabqy.css';
import '../../css/s/s3cotc17f.css';
import '../../css/k/k53xisyrz.css';
import '../../css/g/gel4lacck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="svxyzabqy wm-shadow"/><path class="s3cotc17f"/><path class="k53xisyrz"/><path class="gel4lacck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chopsticks"} {...others} />);
}

export default Component;
