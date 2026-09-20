import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/b/bzerf4upu.css';
import '../../css/v/vj1cdrzkt.css';
import '../../css/d/dqr8yhb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="bzerf4upu"/><path class="vj1cdrzkt"/><path class="dqr8yhb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:smiley-love"} {...others} />);
}

export default Component;
