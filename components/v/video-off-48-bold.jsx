import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eihpo_wmr.css';
import '../../css/z/z32ck6l6l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eihpo_wmr"/><path class="z32ck6l6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:video-off-48-bold"} {...others} />);
}

export default Component;
