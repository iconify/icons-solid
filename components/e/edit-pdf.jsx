import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/k5y6twb8d.css';
import '../../css/q/qif5f6b5k.css';
import '../../css/y/y416tbcdr.css';
import '../../css/m/m9t295yna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="k5y6twb8d"/><path class="qif5f6b5k"/><path class="y416tbcdr"/><path class="m9t295yna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:edit-pdf"} {...others} />);
}

export default Component;
