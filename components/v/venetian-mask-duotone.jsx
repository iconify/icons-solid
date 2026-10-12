import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2zh0mbqm.css';
import '../../css/d/d_hvd6mmh.css';
import '../../css/c/csoims2zl.css';
import '../../css/w/wowvxbhwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j2zh0mbqm"/><path class="d_hvd6mmh"/><path class="csoims2zl"/><path class="wowvxbhwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:venetian-mask-duotone"} {...others} />);
}

export default Component;
