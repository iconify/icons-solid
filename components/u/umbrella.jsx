import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7gfubdlt.css';
import '../../css/l/lrkjd1bsy.css';
import '../../css/l/lriab0bfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k7gfubdlt wm-a"/><path class="lrkjd1bsy wm-k"/><path class="lriab0bfg wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:umbrella"} {...others} />);
}

export default Component;
