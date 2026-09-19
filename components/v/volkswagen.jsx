import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/c/cbdkjzbyk.css';
import '../../css/b/b-7asgbpr.css';
import '../../css/p/pmtqnwzqn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="y6f0jibvm"/><path class="cbdkjzbyk"/><path class="b-7asgbpr"/><path class="pmtqnwzqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:volkswagen"} {...others} />);
}

export default Component;
