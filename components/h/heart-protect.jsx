import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/o76f_khzj.css';
import '../../css/w/whcwtuwzk.css';
import '../../css/a/aal7mdbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="o76f_khzj"/><path class="whcwtuwzk"/><path class="aal7mdbyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:heart-protect"} {...others} />);
}

export default Component;
