import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dfqr0kbzb.css';
import '../../css/f/fqjhgebbw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="dfqr0kbzb"/><path class="fqjhgebbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:cnd"} {...others} />);
}

export default Component;
