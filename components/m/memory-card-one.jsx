import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/p4tqp6bcc.css';
import '../../css/i/igczcib5p.css';
import '../../css/k/kyk_96zzu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="p4tqp6bcc"/><path class="igczcib5p"/><path class="kyk_96zzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:memory-card-one"} {...others} />);
}

export default Component;
