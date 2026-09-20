import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/d969vxclq.css';
import '../../css/r/rrhs3fo_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="d969vxclq"/><path class="rrhs3fo_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:shield-3"} {...others} />);
}

export default Component;
