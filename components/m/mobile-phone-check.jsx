import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/pyh8mab9e.css';
import '../../css/l/lf_j62awi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="pyh8mab9e"/><path class="lf_j62awi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:mobile-phone-check"} {...others} />);
}

export default Component;
