import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/p47c9-mcc.css';
import '../../css/j/jqjqplo7i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="p47c9-mcc"/><path class="jqjqplo7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:avocado"} {...others} />);
}

export default Component;
