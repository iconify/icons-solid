import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d27t_bb-z.css';
import '../../css/t/tucskcrzp.css';
import '../../css/b/b6_4kwocn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d27t_bb-z"/><path class="tucskcrzp"/><path clip-rule="evenodd" class="b6_4kwocn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-outline"} {...others} />);
}

export default Component;
