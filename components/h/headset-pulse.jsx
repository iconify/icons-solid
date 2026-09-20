import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/d/dg2831bup.css';
import '../../css/z/z5zkc5baj.css';
import '../../css/n/ncezycr0e.css';
import '../../css/x/xlmbp6bal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="dg2831bup"/><path class="z5zkc5baj"/><path class="ncezycr0e"/><path class="xlmbp6bal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:headset-pulse"} {...others} />);
}

export default Component;
