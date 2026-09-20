import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z71t7_8so.css';
import '../../css/y/yq5qwxvsu.css';
import '../../css/s/suh5qmbir.css';
import '../../css/y/y7dar9b4s.css';
import '../../css/o/ooxsvhbei.css';
import '../../css/r/rkcibz3ww.css';
import '../../css/u/uqnp2mbpa.css';
import '../../css/v/vw-n2pblw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z71t7_8so"/><path class="yq5qwxvsu"/><path class="suh5qmbir"/><path class="y7dar9b4s"/><path class="ooxsvhbei"/><path class="rkcibz3ww"/><path class="uqnp2mbpa"/><path class="vw-n2pblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:fallen-leaf"} {...others} />);
}

export default Component;
