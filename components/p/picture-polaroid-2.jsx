import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/n/n5s0vjbjy.css';
import '../../css/e/e4qtjm49n.css';
import '../../css/p/p_m-jht1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="n5s0vjbjy"/><path class="e4qtjm49n"/><path class="p_m-jht1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:picture-polaroid-2"} {...others} />);
}

export default Component;
