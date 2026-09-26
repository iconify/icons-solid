import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ah9s1bcom.css';
import '../../css/u/urjv1kbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ah9s1bcom"/><path class="urjv1kbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-up-to-line-linear"} {...others} />);
}

export default Component;
