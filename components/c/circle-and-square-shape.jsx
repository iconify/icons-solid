import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/ilv_8sbcg.css';
import '../../css/g/gc8d5ja7z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ilv_8sbcg"/><path class="gc8d5ja7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:circle-and-square-shape"} {...others} />);
}

export default Component;
