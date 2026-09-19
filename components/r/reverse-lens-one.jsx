import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g-jwhsbbd.css';
import '../../css/m/mbe_9obgv.css';
import '../../css/i/ip-v7iiri.css';
import '../../css/t/tirykcc9x.css';
import '../../css/u/uxytbz-sf.css';
import '../../css/e/ej3qhsb5b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="g-jwhsbbd"/><path class="mbe_9obgv"/><path class="ip-v7iiri"/><path class="tirykcc9x"/><path class="uxytbz-sf"/><path class="ej3qhsb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:reverse-lens-one"} {...others} />);
}

export default Component;
