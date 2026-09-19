import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghyioabfx.css';
import '../../css/k/kpco3xb7r.css';
import '../../css/t/t8y--cb1d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ghyioabfx"/><path clip-rule="evenodd" class="kpco3xb7r"/><path class="t8y--cb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:people-minus-one"} {...others} />);
}

export default Component;
