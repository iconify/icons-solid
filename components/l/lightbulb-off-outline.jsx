import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4kwtb3sj.css';
import '../../css/l/lw-tv69tr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4kwtb3sj"/><path clip-rule="evenodd" class="lw-tv69tr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:lightbulb-off-outline"} {...others} />);
}

export default Component;
