import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/uz5a9fb8c.css';
import '../../css/s/sqfsm7btn.css';
import '../../css/b/b98kc6bwu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="uz5a9fb8c"/><path class="sqfsm7btn"/><path class="b98kc6bwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:apple-one"} {...others} />);
}

export default Component;
