import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/go06gob6r.css';
import '../../css/g/g-qv8bczh.css';
import '../../css/i/iibhdnb1d.css';
import '../../css/n/n6tiycbfr.css';
import '../../css/a/aorji3mah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="go06gob6r"/><path class="g-qv8bczh"/><path class="iibhdnb1d"/><path class="n6tiycbfr"/><path class="aorji3mah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-sing-right-note"} {...others} />);
}

export default Component;
