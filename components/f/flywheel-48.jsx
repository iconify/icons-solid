import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqul4gkqk.css';
import '../../css/u/u7bozsa8i.css';
import '../../css/t/tkxry7wol.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zqul4gkqk"/><path class="u7bozsa8i"/><path class="tkxry7wol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flywheel-48"} {...others} />);
}

export default Component;
