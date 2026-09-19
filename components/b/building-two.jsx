import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hcent-gle.css';
import '../../css/i/ia73ntbug.css';
import '../../css/h/had8q-s7j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGem32ZcMG"><g class="aql7dnt-u"><path class="hcent-gle"/><path clip-rule="evenodd" class="ia73ntbug"/><path class="had8q-s7j"/></g></mask></defs><path mask="url(#SVGem32ZcMG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:building-two"} {...others} />);
}

export default Component;
