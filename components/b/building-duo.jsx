import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uhidrxbyb.css';
import '../../css/r/r309anzoi.css';
import '../../css/e/euhc06b6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uhidrxbyb"/><path class="r309anzoi wm-a"/><path class="euhc06b6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:building-duo"} {...others} />);
}

export default Component;
