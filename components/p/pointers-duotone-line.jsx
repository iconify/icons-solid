import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p03u_bbuh.css';
import '../../css/r/rpivlejjt.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGLWB7qesQ"><g class="ft5dv1b6b"><path class="p03u_bbuh"/><path class="rpivlejjt"/></g></mask></defs><path mask="url(#SVGLWB7qesQ)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pointers-duotone-line"} {...others} />);
}

export default Component;
