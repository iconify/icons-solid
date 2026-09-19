import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udnvig89x.css';
import '../../css/m/mj6sbgtse.css';
import '../../css/y/y9ompvb3x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="udnvig89x"/><path class="mj6sbgtse"/><path class="y9ompvb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:speakercancellation"} {...others} />);
}

export default Component;
