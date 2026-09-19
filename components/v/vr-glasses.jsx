import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpt0rl_0q.css';
import '../../css/s/sak0m1nef.css';
import '../../css/e/ef7x2zbjy.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="gpt0rl_0q"><path class="sak0m1nef"/><path class="ef7x2zbjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:vr-glasses"} {...others} />);
}

export default Component;
