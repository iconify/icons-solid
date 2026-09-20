import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y1mc29t-p.css';
import '../../css/r/rkn19ozjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y1mc29t-p"/><path class="rkn19ozjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:camera-setting-pin"} {...others} />);
}

export default Component;
