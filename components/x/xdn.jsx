import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uzrvx8nfp.css';
import '../../css/o/ocwlu6jwb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="uzrvx8nfp"/><path class="ocwlu6jwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xdn"} {...others} />);
}

export default Component;
