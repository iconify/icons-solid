import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/ruqwh-abt.css';
import '../../css/a/a350jnbrs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPOcIjc5v"><g class="v3_i3wktz"><path class="ruqwh-abt"/><path class="a350jnbrs"/></g></mask></defs><path mask="url(#SVGPOcIjc5v)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:speed-one"} {...others} />);
}

export default Component;
