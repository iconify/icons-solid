import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/it-6pnb9s.css';
import '../../css/e/eggrvn9ds.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSAcBcIzw"><g class="v3_i3wktz"><path class="it-6pnb9s"/><path class="eggrvn9ds"/></g></mask></defs><path mask="url(#SVGSAcBcIzw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:connection-point-two"} {...others} />);
}

export default Component;
