import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tyut11btg.css';
import '../../css/g/gl9qqh_kw.css';
import '../../css/m/mvh69ib4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tyut11btg"/><path class="gl9qqh_kw"/><path class="mvh69ib4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smart-watch-square-location"} {...others} />);
}

export default Component;
