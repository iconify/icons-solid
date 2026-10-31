import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sjyrws3-o.css';
import '../../css/r/r_2fszu-h.css';
import '../../css/y/y0296obvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sjyrws3-o"/><path class="r_2fszu-h"/><path class="y0296obvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:template"} {...others} />);
}

export default Component;
