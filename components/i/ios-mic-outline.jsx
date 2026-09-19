import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-e9bcc3c.css';
import '../../css/d/dr9-gqbcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s-e9bcc3c"/><path class="dr9-gqbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-mic-outline"} {...others} />);
}

export default Component;
