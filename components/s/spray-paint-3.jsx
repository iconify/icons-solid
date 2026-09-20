import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/x99csvbvw.css';
import '../../css/i/i0y2_-bex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="x99csvbvw"/><path class="i0y2_-bex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:spray-paint-3"} {...others} />);
}

export default Component;
