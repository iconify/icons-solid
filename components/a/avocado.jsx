import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/sg95bbc_h.css';
import '../../css/t/tbvkbnb5d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="sg95bbc_h"/><path class="tbvkbnb5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:avocado"} {...others} />);
}

export default Component;
