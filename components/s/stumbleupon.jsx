import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezce_6bqy.css';
import '../../css/x/xtew6gkwi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ezce_6bqy"/><path class="xtew6gkwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:stumbleupon"} {...others} />);
}

export default Component;
