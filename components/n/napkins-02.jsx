import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f55vo7bfa.css';
import '../../css/h/h3jrti43j.css';
import '../../css/a/ahck4kpve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f55vo7bfa"/><path class="h3jrti43j"/><path class="ahck4kpve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:napkins-02"} {...others} />);
}

export default Component;
