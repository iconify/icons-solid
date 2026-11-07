import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5qboab5t.css';
import '../../css/o/oeh5lxbqa.css';
import '../../css/p/p03812bxn.css';
import '../../css/m/mnelrmb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5qboab5t"/><path clip-rule="evenodd" class="oeh5lxbqa"/><path clip-rule="evenodd" class="p03812bxn"/><path clip-rule="evenodd" class="mnelrmb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-pull-request-bold-duotone"} {...others} />);
}

export default Component;
