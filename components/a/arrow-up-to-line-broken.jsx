import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/urjv1kbgr.css';
import '../../css/m/mzpfazf1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="urjv1kbgr"/><path class="mzpfazf1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-up-to-line-broken"} {...others} />);
}

export default Component;
