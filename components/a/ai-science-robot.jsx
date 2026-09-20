import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/b/bf53s552u.css';
import '../../css/c/chv70ybrw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="bf53s552u"/><path class="chv70ybrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-science-robot"} {...others} />);
}

export default Component;
