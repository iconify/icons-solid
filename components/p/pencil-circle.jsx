import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/h0ebrdd5k.css';
import '../../css/f/fdhomzbdh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="h0ebrdd5k"/><path class="fdhomzbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pencil-circle"} {...others} />);
}

export default Component;
