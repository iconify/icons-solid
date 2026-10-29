import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uh51hhbrp.css';
import '../../css/g/g489vwhdf.css';
import '../../css/o/ocoockb2g.css';
import '../../css/a/ax14dsbgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uh51hhbrp"/><path class="g489vwhdf"/><path class="ocoockb2g"/><path class="ax14dsbgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-duo"} {...others} />);
}

export default Component;
