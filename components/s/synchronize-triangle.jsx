import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/oyqhp_bvg.css';
import '../../css/a/aoifjhzdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="oyqhp_bvg"/><path class="aoifjhzdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:synchronize-triangle"} {...others} />);
}

export default Component;
