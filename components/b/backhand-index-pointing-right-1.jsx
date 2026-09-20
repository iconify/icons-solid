import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pccfkqbsy.css';
import '../../css/h/hc26bnb7y.css';
import '../../css/b/bp1ojco9h.css';
import '../../css/y/y6lequ7jv.css';
import '../../css/y/yvgdpzb2e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pccfkqbsy"/><path class="hc26bnb7y"/><path class="bp1ojco9h"/><path class="y6lequ7jv"/><path class="yvgdpzb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:backhand-index-pointing-right-1"} {...others} />);
}

export default Component;
