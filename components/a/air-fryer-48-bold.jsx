import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr591jbfa.css';
import '../../css/y/yu2dp5b7t.css';
import '../../css/w/w3bek7b9i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dr591jbfa"/><path class="yu2dp5b7t"/><path class="w3bek7b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-fryer-48-bold"} {...others} />);
}

export default Component;
