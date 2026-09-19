import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/ly3dcqbgo.css';
import '../../css/k/kd00u0b-i.css';
import '../../css/j/jxsnms7hz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSDfsTcUV"><g class="aql7dnt-u"><circle class="ly3dcqbgo"/><circle class="kd00u0b-i"/><path class="jxsnms7hz"/></g></mask></defs><path mask="url(#SVGSDfsTcUV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:division"} {...others} />);
}

export default Component;
