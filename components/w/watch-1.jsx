import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lorxetbzu.css';
import '../../css/f/fdm9_m9fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="lorxetbzu"/><path class="fdm9_m9fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:watch-1"} {...others} />);
}

export default Component;
