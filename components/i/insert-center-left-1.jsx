import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6i512l0s.css';
import '../../css/f/fkggerb-j.css';
import '../../css/v/vh2yfac-r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b6i512l0s"/><path class="fkggerb-j"/><path class="vh2yfac-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:insert-center-left-1"} {...others} />);
}

export default Component;
