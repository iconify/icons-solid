import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsatub3fk.css';
import '../../css/c/c2aqpmbiz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dsatub3fk"/><path clip-rule="evenodd" class="c2aqpmbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:user-circle-solid"} {...others} />);
}

export default Component;
