import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/c/c7yf8lb2a.css';
import '../../css/j/j10obwbfi.css';
import '../../css/d/dpzxs9imi.css';
import '../../css/q/qokz-45cz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="c7yf8lb2a"/><path class="j10obwbfi"/><path class="dpzxs9imi"/><path class="qokz-45cz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:snake-zodiac"} {...others} />);
}

export default Component;
