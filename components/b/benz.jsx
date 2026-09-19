import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/x/xlg4h1uyo.css';
import '../../css/b/bazc4or7p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="y6f0jibvm"/><path class="xlg4h1uyo"/><path class="bazc4or7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:benz"} {...others} />);
}

export default Component;
