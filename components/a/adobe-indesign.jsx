import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/s/svaol_i1h.css';
import '../../css/s/spraj-4ql.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGA3YCcccP"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="svaol_i1h"/><path clip-rule="evenodd" class="spraj-4ql"/></g></mask></defs><path mask="url(#SVGA3YCcccP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:adobe-indesign"} {...others} />);
}

export default Component;
