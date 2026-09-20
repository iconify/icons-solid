import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yte3omhmn.css';
import '../../css/b/bmw9obc8p.css';
import '../../css/t/txtf8-bqd.css';
import '../../css/g/gkbqjpb8s.css';
import '../../css/g/gj-fope3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yte3omhmn"/><path class="bmw9obc8p"/><path class="txtf8-bqd"/><path class="gkbqjpb8s"/><path class="gj-fope3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-rol-duotone-line"} {...others} />);
}

export default Component;
