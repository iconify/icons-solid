import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s7jbpkb8n.css';
import '../../css/b/bg35mzkhb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="s7jbpkb8n"/><path class="bg35mzkhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:spank"} {...others} />);
}

export default Component;
