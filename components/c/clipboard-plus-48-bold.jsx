import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u95e4sw8e.css';
import '../../css/l/lfn44k03n.css';
import '../../css/i/i_mq2ccik.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u95e4sw8e"/><path class="lfn44k03n"/><path class="i_mq2ccik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-plus-48-bold"} {...others} />);
}

export default Component;
