import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/atf3sjb9z.css';
import '../../css/h/h2xt6ozov.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="atf3sjb9z"/><path class="h2xt6ozov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cog"} {...others} />);
}

export default Component;
