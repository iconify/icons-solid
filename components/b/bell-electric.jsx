import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zr6myfbli.css';
import '../../css/c/cnc8kxp4p.css';
import '../../css/o/o3jl589pi.css';
import '../../css/g/gl_t73bxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zr6myfbli"/><circle class="cnc8kxp4p"/><circle class="o3jl589pi"/><rect class="gl_t73bxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bell-electric"} {...others} />);
}

export default Component;
