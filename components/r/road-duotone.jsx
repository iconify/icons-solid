import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g3e73qb8p.css';
import '../../css/u/uxijnzb_e.css';
import '../../css/e/e8gyvtbbs.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGmo6M0bnB"><g class="ft5dv1b6b"><path class="g3e73qb8p"/><path class="uxijnzb_e"/><path class="e8gyvtbbs"/></g></mask></defs><path mask="url(#SVGmo6M0bnB)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:road-duotone"} {...others} />);
}

export default Component;
