import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ylyf4fbfa.css';
import '../../css/b/b_2_o9bod.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGh5D8Ybxs"><g class="ft5dv1b6b"><path class="ylyf4fbfa"/><path class="b_2_o9bod"/></g></mask></defs><path mask="url(#SVGh5D8Ybxs)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:fire-alt-duotone"} {...others} />);
}

export default Component;
