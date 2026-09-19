import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgexy272d.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ei5__42ey.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGRpELTb9u" class="tgexy272d"/></defs><mask id="SVGGK5dLbpI" class="ft5dv1b6b"><use href="#SVGRpELTb9u"/></mask><g class="cuyn6tgcc"><use href="#SVGRpELTb9u"/><path mask="url(#SVGGK5dLbpI)" class="ei5__42ey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:resilient-and-migration-sensitive-health-system-24px"} {...others} />);
}

export default Component;
