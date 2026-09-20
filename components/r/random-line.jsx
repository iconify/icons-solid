import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s412b-n-e.css';
import '../../css/m/mb0wncc3g.css';
import '../../css/a/abe0tyb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s412b-n-e"/><path class="mb0wncc3g"/><path class="abe0tyb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:random-line"} {...others} />);
}

export default Component;
