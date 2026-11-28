import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/ggubv6whl.css';
import '../../css/s/sk3qebj-f.css';
import '../../css/o/oet5zxb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ggubv6whl"/><path class="sk3qebj-f"/><path class="oet5zxb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:telegram"} {...others} />);
}

export default Component;
