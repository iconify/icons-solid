import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kek-0ac7m.css';
import '../../css/z/z35qze5mv.css';
import '../../css/q/q3di7sz9i.css';
import '../../css/j/j7ysxhtoh.css';
import '../../css/j/jtg0osotn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kek-0ac7m"/><path class="z35qze5mv"/><path clip-rule="evenodd" class="q3di7sz9i"/><path class="j7ysxhtoh"/><path class="jtg0osotn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-outline"} {...others} />);
}

export default Component;
