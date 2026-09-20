import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfx64nbcy.css';
import '../../css/g/gnuwk8bij.css';
import '../../css/b/bspadebvz.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGFD4XveMZ"><g class="ft5dv1b6b"><path class="yfx64nbcy"/><path class="gnuwk8bij"/><path class="bspadebvz"/></g></mask></defs><path mask="url(#SVGFD4XveMZ)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pointers-duotone"} {...others} />);
}

export default Component;
