import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yeidmrbkv.css';
import '../../css/v/v-dirxeca.css';
import '../../css/k/k8xai9-ai.css';
import '../../css/o/opzfpqbwv.css';
import '../../css/b/b-y7gjbee.css';
import '../../css/d/d1uawhe3t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9w0xtdjE"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="yeidmrbkv"/><path class="v-dirxeca"/><path class="k8xai9-ai"/><path clip-rule="evenodd" class="opzfpqbwv"/><path class="b-y7gjbee"/><path class="d1uawhe3t"/></g></mask></defs><path mask="url(#SVG9w0xtdjE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baby"} {...others} />);
}

export default Component;
