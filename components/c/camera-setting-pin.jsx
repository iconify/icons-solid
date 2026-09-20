import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/e/e9-6i3ksy.css';
import '../../css/i/iiyi3bnoe.css';
import '../../css/w/w4ctc-m2j.css';
import '../../css/d/dkx6j8b9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="e9-6i3ksy"/><path class="iiyi3bnoe"/><path class="w4ctc-m2j"/><path class="dkx6j8b9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:camera-setting-pin"} {...others} />);
}

export default Component;
