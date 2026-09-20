import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/edd2mwbun.css';
import '../../css/m/me0q1cc4y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="edd2mwbun"/><path class="me0q1cc4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pencil-square"} {...others} />);
}

export default Component;
