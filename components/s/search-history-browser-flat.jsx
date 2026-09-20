import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/if7o99p0n.css';
import '../../css/v/vimal-muy.css';
import '../../css/a/awcdtac6r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="if7o99p0n"/><path class="vimal-muy"/><path clip-rule="evenodd" class="awcdtac6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:search-history-browser-flat"} {...others} />);
}

export default Component;
