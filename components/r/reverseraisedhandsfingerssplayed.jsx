import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fex8l3b8p.css';
import '../../css/r/rw715wbnw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fex8l3b8p"/><path class="rw715wbnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:reverseraisedhandsfingerssplayed"} {...others} />);
}

export default Component;
