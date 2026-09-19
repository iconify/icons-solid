import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/o/ozj6j1biz.css';
import '../../css/p/p7nzrhhjr.css';
import '../../css/k/kjzog8teo.css';
import '../../css/k/kjdsa22ry.css';
import '../../css/q/qnmw-59tw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="ozj6j1biz"/><path class="p7nzrhhjr"/><path class="kjzog8teo"/><path class="kjdsa22ry"/><path class="qnmw-59tw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:in-flight"} {...others} />);
}

export default Component;
