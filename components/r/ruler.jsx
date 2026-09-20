import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xbemvqt9d.css';
import '../../css/a/a0k6mzq6g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="xbemvqt9d"/><path class="a0k6mzq6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ruler"} {...others} />);
}

export default Component;
