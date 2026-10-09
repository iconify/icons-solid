import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/z/zqb_age4a.css';
import '../../css/p/ppsnx1buw.css';
import '../../css/i/iox5mgb4p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="zqb_age4a"/><path class="ppsnx1buw"/><path class="iox5mgb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mvhr-48"} {...others} />);
}

export default Component;
