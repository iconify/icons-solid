import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gxn8twyqa.css';
import '../../css/d/d7osp4bfk.css';
import '../../css/m/mxi5jcbic.css';
import '../../css/s/s0o9r4bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="gxn8twyqa"/><path class="d7osp4bfk"/><path class="mxi5jcbic"/><path class="s0o9r4bgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:browser-code-2"} {...others} />);
}

export default Component;
