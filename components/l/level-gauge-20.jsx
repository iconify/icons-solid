import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6huerbpx.css';
import '../../css/l/li94czbpv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b6huerbpx"/><path class="li94czbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:level-gauge-20"} {...others} />);
}

export default Component;
