import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/na63v48uc.css';
import '../../css/l/lnd3c0bpx.css';
import '../../css/r/rk3zggbju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="na63v48uc"/><path class="lnd3c0bpx"/><path class="rk3zggbju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:desk-alt-duotone"} {...others} />);
}

export default Component;
