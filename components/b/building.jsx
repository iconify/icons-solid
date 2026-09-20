import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-kvhlhfn.css';
import '../../css/m/m4_7k9qjb.css';
import '../../css/j/jrdm0zbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a-kvhlhfn"/><path class="m4_7k9qjb"/><path class="jrdm0zbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:building"} {...others} />);
}

export default Component;
