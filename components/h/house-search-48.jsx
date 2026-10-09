import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/g/ggiylmb3l.css';
import '../../css/z/z50wiibzp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="ggiylmb3l"/><path class="z50wiibzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-search-48"} {...others} />);
}

export default Component;
