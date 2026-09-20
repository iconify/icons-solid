import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqlhhob6j.css';
import '../../css/w/wueuzxb4n.css';
import '../../css/e/ez5-y3bju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aqlhhob6j"/><path clip-rule="evenodd" class="wueuzxb4n"/><path class="ez5-y3bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:crosshair-detailed-fill"} {...others} />);
}

export default Component;
