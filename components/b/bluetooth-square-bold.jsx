import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni4guvo3k.css';
import '../../css/t/tkf6t0vzx.css';
import '../../css/k/kiitt-b2j.css';
import '../../css/y/yi3kozl7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ni4guvo3k"/><path class="tkf6t0vzx"/><path class="kiitt-b2j"/><path clip-rule="evenodd" class="yi3kozl7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-square-bold"} {...others} />);
}

export default Component;
