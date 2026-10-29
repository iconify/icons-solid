import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaarvgb4j.css';
import '../../css/v/vtoiukfqw.css';
import '../../css/f/fmg_-iv0m.css';
import '../../css/w/wwcz5sdbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k zaarvgb4j"/><path class="vtoiukfqw wm-a"/><path class="fmg_-iv0m wm-k"/><path class="wm-k wwcz5sdbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pizza"} {...others} />);
}

export default Component;
