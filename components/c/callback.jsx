import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbai33bej.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/z/z6ykmyhyu.css';
import '../../css/q/qtw6_-box.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xbai33bej"/><g class="wtfmx7b3v"><path class="z6ykmyhyu"/><path class="qtw6_-box"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:callback"} {...others} />);
}

export default Component;
