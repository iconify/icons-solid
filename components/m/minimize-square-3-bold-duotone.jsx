import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/a/a50m54bhh.css';
import '../../css/r/rln165b9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="a50m54bhh"/><path class="rln165b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-square-3-bold-duotone"} {...others} />);
}

export default Component;
