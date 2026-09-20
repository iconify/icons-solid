import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gtnq0_blo.css';
import '../../css/s/soscjabbn.css';
import '../../css/z/zijbwvhvx.css';
import '../../css/n/n-ytn4yme.css';
import '../../css/e/e1pdv8b9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="gtnq0_blo"/><path class="soscjabbn"/><path class="zijbwvhvx"/><path class="n-ytn4yme"/><path class="e1pdv8b9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:slide-show-play"} {...others} />);
}

export default Component;
