import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eyeze3yrd.css';
import '../../css/z/ziaphnbba.css';
import '../../css/a/a5wousakn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eyeze3yrd"/><path class="ziaphnbba"/><path clip-rule="evenodd" class="a5wousakn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:school-check-solid"} {...others} />);
}

export default Component;
