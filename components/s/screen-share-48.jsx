import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly_hv7bof.css';
import '../../css/a/azjk1obih.css';
import '../../css/h/hdktsfu6p.css';
import '../../css/u/u5zilgbbx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ly_hv7bof"/><path class="azjk1obih"/><path class="hdktsfu6p"/><path class="u5zilgbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screen-share-48"} {...others} />);
}

export default Component;
