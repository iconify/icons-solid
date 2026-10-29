import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bve4te0yg.css';
import '../../css/w/wkw6z49nw.css';
import '../../css/e/ereqplbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bve4te0yg"/><path class="wkw6z49nw"/><path class="ereqplbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:lucky-coin"} {...others} />);
}

export default Component;
