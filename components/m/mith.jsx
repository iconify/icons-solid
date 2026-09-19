import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cng0_ab3m.css';
import '../../css/a/a4wajpble.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="cng0_ab3m"/><path class="a4wajpble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:mith"} {...others} />);
}

export default Component;
